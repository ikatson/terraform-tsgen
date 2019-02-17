import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_athena_named_query_config {
    database: rstring
    description?: rstring
    name: rstring
    query: rstring
}

export class aws_athena_named_query implements Resource {
    config: aws_athena_named_query_config
    private _is_data: boolean = false
    private _name: string = "aws_athena_named_query"
    private _id: string;
    constructor(id: string, config: aws_athena_named_query_config) {
        this._id = id;
        this.config = config;
    }
    getID(): string {
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
    
    get ref_database(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.database`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_query(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.query`)
    }
}

