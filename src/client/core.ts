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

export interface HasID {
    getID(): string
}
export interface HasName {
    getName(): string
}
export interface Data extends HasID, HasName {}
export interface Resource extends HasID, HasName {}
export interface Provider {}
export class Output {}


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

    toJSON() {
        return {
            variable: this._variables,
            provider: this._providers,
            data: this._data,
            resource: this._resources
        }
    }
}

export type rnumber = number | Reference<number> | Expression
export type rstring = string | Reference<string> | Expression
export type rboolean = boolean | Reference<boolean> | Expression