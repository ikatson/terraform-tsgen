import fs = require("fs");
import * as program from "commander";

import {Schema, Type, SchemaInfo, TypeDescription} from "./inputschema";

async function parseInput(filename: string): Promise<Schema> {
  const content = fs.readFileSync(filename);
  const contentString = content.toString("utf-8");
  return <Schema>JSON.parse(contentString);
}

enum SchemaInfoType {
  Provider,
  Resource,
  Data,
  Other
}

class Generator {
  definitions: string[] = [];
  schema: Schema;
  constructor(s: Schema) {
    this.schema = s;
  }

  unrefType(t: string) {
    switch (t) {
      case 'rstring':
        return 'string'
      case 'rnumber':
        return 'number'
      case 'rboolean':
        return 'boolean'
      default:
        return t
    }
  }

  getTypeString(name: string, type: Type, td?: TypeDescription): string {
    switch (type) {
      case Type.TypeString:
        return "rstring";
      case Type.TypeList:
      case Type.TypeSet:
        if (!td) {
          throw new Error(`panic, unexpected input at ${name}. TypeDescription is not provided, but type is ${type}`);
        }
        switch (td.Elem.Type) {
          case Type.SchemaElements:
            return `${this.getTypeString(name, td.Elem.ElementsType)}[]`;
          case Type.SchemaInfo:
            this.renderSchemaInfo(name, td.Elem.Info, SchemaInfoType.Other)
            return name + '[]'
          default:
            throw new Error(`unexpected type ${td.Elem.Type}`);
        }
      case Type.TypeFloat:
      case Type.TypeInt:
        return "rnumber";
      case Type.TypeBool:
        return "rboolean";
      case Type.SchemaInfo:
        if (!td) {
          throw new Error(`panic, unexpected input at ${name}. TypeDescription is not provided, but type is ${type}`);
        }
        return this.renderSchemaInfo(name, td.Elem.Info, SchemaInfoType.Other)
        // throw new Error(`did not expect to see type ${type}. Currently at ${name}`);
      case Type.SchemaElements:
        if (!td) {
          throw new Error(`panic, unexpected input at ${name}. TypeDescription is not provided, but type is ${type}`);
        }
        return `${this.getTypeString(name, td.Elem.Type)}[]`;
        // throw new Error(`did not expect to see type ${type}. Currently at ${name}`);
      case Type.TypeMap:
        // TODO: are there maps other than string values?
        return "{[propName: string]: rstring}";
      default:
        throw new Error(`unexpected type ${type}`);
    }
  }

  renderSchemaInfo(targetClassName: string, si: SchemaInfo, type: SchemaInfoType): string {
    /*
    interface aws_autoscaling_group_config {
        max_size: rnumber,
        min_size: rnumber,
        load_balancers?: rstring[]
    }

    class aws_autoscaling_group {
        config: aws_autoscaling_group_config;
        private _is_data: boolean = false;
        private _name: "aws_autoscaling_group";
        id: string;
        constructor(id: string, config: aws_autoscaling_group_config) {
            this.id = id;
            this.config = config;
        }

        get max_size(): Reference<number> {
            return new Reference(`${this.id}.${this.name}.max_size`)
        }
    }
    */

    if (!si) {
      console.warn(`no object at ${targetClassName}. Returning "any"`)
      return 'any';
    }

    let configClsName = `${targetClassName}_config`

    if (type === SchemaInfoType.Other) {
      configClsName = targetClassName
    }
    
    const configCls: string[] = [`export interface ${configClsName} {`];

    let impl: string = '';
    
    switch (type) {
      case SchemaInfoType.Data:
        impl = 'Data'
        break;
      case SchemaInfoType.Resource:
        impl = 'Resource'
        break
      case SchemaInfoType.Other:
        break
      case SchemaInfoType.Provider:
        impl = 'Provider'
        break
      default:
        throw new Error(`unreachable. type is ${type}`)
    }

    const cls = []

    if (impl) {
      cls.push(`export class ${targetClassName} implements ${impl} {`)
      cls.push(`    config: ${targetClassName}_config`)
    }

    const namedConstructor = `    constructor(id: string, config: ${targetClassName}_config) {
        this._id = id;
        this.config = config;
    }`;

    const providerImpls = `    constructor(config: ${targetClassName}_config) {
      this.config = config;
    }
    toJSON() {
      return {
          ${this.schema.name}: [this.config]
      }
    }
    `;

    const dataAndResourceImpls = `    getID(): string {
      return this._id;
    }
    getName(): string {
      return this._name;
    }
    toJSON() {
      return {
          [this._name]: [
            {
              [this._id]: [this.config]
            }
          ]
      };
    }
    `;

    switch (type) {
      case SchemaInfoType.Data:
        cls.push(`    private _is_data: boolean = true`);
        cls.push(`    private _name: string = "${targetClassName}"`)
        cls.push('    private _id: string;')
        cls.push(namedConstructor)
        cls.push(dataAndResourceImpls)
        break;
      case SchemaInfoType.Resource:
        cls.push(`    private _is_data: boolean = false`);
        cls.push(`    private _name: string = "${targetClassName}"`)
        cls.push('    private _id: string;')
        cls.push(namedConstructor)
        cls.push(dataAndResourceImpls)
        break
      case SchemaInfoType.Other:
      case SchemaInfoType.Provider:
        cls.push(providerImpls)
        break
      default:
        throw new Error(`unreachable. type is ${type}`)
    }

    for (const [k, v] of Object.entries(si)) {
      const member: string[] = [k];
      if (!v.Required) {
        member.push('?')
      }
      member.push(': ')
      const isDeep = targetClassName.search(/__/)
      let targetClassNameInner = targetClassName + "__" + k;
      if (isDeep) {
        targetClassNameInner = '_' + targetClassNameInner;
      }
      const typeString = this.getTypeString(targetClassNameInner, v.Type, v);
      member.push(typeString)

      switch (type) {
        case SchemaInfoType.Data:
          cls.push(`    get ref_${k}(): Reference<${this.unrefType(typeString)}> {
        return new Reference(\`data.\${this._name}.\${this._id}.${k}\`)
  }`)
          break;        
        case SchemaInfoType.Resource:
          cls.push(`    get ref_${k}(): Reference<${this.unrefType(typeString)}> {
        return new Reference(\`\${this._name}.\${this._id}.${k}\`)
    }`)
          break
        case SchemaInfoType.Provider:
        case SchemaInfoType.Other:
          break
        default:
          throw new Error(`unreachable. type is ${SchemaInfoType[type]}`)
      }

      if (v.Description && v.Description != "") {
        configCls.push(`    /**
     * ${v.Description.trim()}    
     */`)
      }
      configCls.push('    ' + member.join(''))
    }

    configCls.push('}')

    if (impl) {
      cls.push("}");
    }

    this.definitions.push(configCls.join("\n"));
    if (impl) {
      this.definitions.push(cls.join("\n"));
      return targetClassName;
    } else {
      return configClsName;
    }
  }

  clear() {
    this.definitions = [];
  }

  *generate(): IterableIterator<string> {
    yield 'import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "./core"'

    this.renderSchemaInfo(`${this.schema.name}_provider`, this.schema.provider, SchemaInfoType.Provider)
    for (const d of this.definitions) {
      yield d
    }
    this.clear()

    for (const [k, v] of Object.entries(this.schema.resources)) {
      this.renderSchemaInfo(`${k}`, v, SchemaInfoType.Resource)
      for (const d of this.definitions) {
        yield d
      }
      this.clear()
    }
    for (const [k, v] of Object.entries(this.schema['data-sources'])) {
      this.renderSchemaInfo(`data_${k}`, v, SchemaInfoType.Data)
      for (const d of this.definitions) {
        yield d
      }
      this.clear()
    }
  }
}

function main() {
  program.version("0.0.1");

  program
    .command("generate <input_schema>")
    .action((input_schema: string, options: program.Command) => {
      parseInput(input_schema).then(async s => {
        const g = new Generator(s);
        for (const s of g.generate()) {
          process.stdout.write(s)
          process.stdout.write("\n\n")
        }
      });
    });

  program.parse(process.argv);
}

main();
