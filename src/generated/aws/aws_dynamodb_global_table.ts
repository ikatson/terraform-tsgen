import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_dynamodb_global_table__replica {
    region_name: rstring
}

export interface aws_dynamodb_global_table_config {
    arn?: rstring
    name: rstring
    replica: _aws_dynamodb_global_table__replica[]
}

export class aws_dynamodb_global_table implements Resource {
    config: aws_dynamodb_global_table_config
    private _is_data: boolean = false
    private _name: string = "aws_dynamodb_global_table"
    private _id: string;
    constructor(id: string, config: aws_dynamodb_global_table_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_replica(): Reference<_aws_dynamodb_global_table__replica[]> {
        return new Reference(`${this._name}.${this._id}.replica`)
    }
}

