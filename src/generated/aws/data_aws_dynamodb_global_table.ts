import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_dynamodb_global_table__replica {
    region_name: rstring
}

export interface data_aws_dynamodb_global_table_config {
    arn?: rstring
    name: rstring
    replica: _data_aws_dynamodb_global_table__replica[]
}

export class data_aws_dynamodb_global_table implements Data {
    config: data_aws_dynamodb_global_table_config
    private _is_data: boolean = true
    private _name: string = "data_aws_dynamodb_global_table"
    private _id: string;
    constructor(id: string, config: data_aws_dynamodb_global_table_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_replica(): Reference<_data_aws_dynamodb_global_table__replica[]> {
        return new Reference(`data.${this._name}.${this._id}.replica`)
  }
}

