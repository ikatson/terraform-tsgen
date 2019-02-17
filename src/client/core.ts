export class UntypedReference {
    path: string;
    constructor(path: string) {
        this.path = path;
    }
    toString(): string {
        return "${" + this.path + "}";
    }
    toJSON(): string {
        return this.toString()
    }
}

export class Reference<T> {
    path: string;
    constructor(path: string) {
        this.path = path;
    }
    toString(): string {
        return "${" + this.path + "}";
    }
    toJSON(): string {
        return this.toString()
    }
}

export class Expression {
    exp: string;
    constructor(exp: string) {
        this.exp = exp;
    }
    toString(): string {
        return "${" + this.exp + "}";
    }
    toJSON(): string {
        return this.toString()
    }
}

export enum VariableType {
    Map = "map",
    List = "list",
    Int = "int",
    Float = "float",
    Boolean = "boolean",
    String = "string"
}

export class Variable {
    name: string
    description: string
    type: VariableType
    default: any

    constructor(name: string, description: string = "", type: VariableType = VariableType.String, defaultValue: any = "") {
        this.name = name;
        this.description = description
        this.type = type
        this.default = defaultValue
    }
    toString(): string {
        return this.asReference().toString()
    }
    asReference() {
        return new Reference(`var.${this.name}`)
    }
    toJSON() {
        return {
            [this.name]: [{
                description: this.description,
                default: this.default,
                type: this.type,
            }]
        }
    }
}

export class UsedModule {
    inputs: Map<string, anyType> = new Map()
    outputs: Map<string, Output> = new Map()
    
    name: string
    source: string

    constructor(name: string, source: string) {
        this.name = name
        this.source = source
    }

    set(k: string, value: anyType): this {
        this.inputs.set(k, value)
        return this
    }

    outputRef(k: string): UntypedReference {
        return new UntypedReference(`module.${this.name}.${k}`)
    }

    toJSON() {
        const values: {[p: string]: any} = {
            source: this.source,
        }
        for (const [k, v] of this.inputs) {
            values[k] = v;
        }
        return {
            [this.name]: [values]
        }
    }
}

export class GeneratedModule {
    name: string
    source: string

    variables: Map<string, Variable> = new Map()
    outputs: Map<string, Output> = new Map()

    constructor(name: string, source: string) {
        this.name = name
        this.source = source
    }
}

export interface HasID {
    getID(): string
}
export interface HasName {
    getName(): string
}
export interface Data extends HasID, HasName {}
export interface Resource extends HasID, HasName {}
export interface Provider {}

export class Output {
    name: string
    value: primitiveTypes
    
    constructor(name: string, value: primitiveTypes) {
        this.name = name;
        this.value = value;
    }

    toJSON() {
        return {
            [this.name]: [{value: this.value}]
        }
    }
}


export class TfModule {
    _resources: Resource[] = []
    _data: Data[] = []
    _variables: Variable[] = []
    _providers: Provider[] = []
    _outputs: Output[] = []

    data<T extends Data>(d: T): T {
        this._data.push(d)
        return d
    }

    provider<T extends Provider>(d: T): T {
        this._providers.push(d)
        return d
    }

    variable<T extends Variable>(d: T): T {
        this._variables.push(d)
        return d
    }

    resource<T extends Resource>(d: T): T {
        this._resources.push(d)
        return d
    }

    output<T extends Output>(d: T): T {
        this._outputs.push(d)
        return d
    }

    asModule(name: string, path: string): GeneratedModule {
        const module = new GeneratedModule(name, path);
        for (const v of this._variables) {
            module.variables.set(v.name, v)
        }
        for (const v of this._outputs) {
            module.outputs.set(v.name, v)
        }
        return module
    }

    toJSON() {
        return {
            variable: this._variables,
            provider: this._providers,
            data: this._data,
            resource: this._resources,
            output: this._outputs,
        }
    }
}

export type rnumber = number | Reference<number> | UntypedReference | Expression
export type rstring = string | Reference<string> | UntypedReference | Expression
export type rboolean = boolean | Reference<boolean> | UntypedReference | Expression
export type primitiveTypes = rnumber | rstring | rboolean
export type anyType = primitiveTypes | {[p: string]: primitiveTypes} | Array<primitiveTypes>