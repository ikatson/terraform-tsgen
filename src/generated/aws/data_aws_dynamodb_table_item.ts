import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_dynamodb_table_item_config {
    hash_key: rstring
    item: rstring
    range_key?: rstring
    table_name: rstring
}

export class data_aws_dynamodb_table_item implements Data {
    config: data_aws_dynamodb_table_item_config
    private _is_data: boolean = true
    private _name: string = "data_aws_dynamodb_table_item"
    private _id: string;
    constructor(id: string, config: data_aws_dynamodb_table_item_config) {
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
    
    get ref_hash_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.hash_key`)
  }
    get ref_item(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.item`)
  }
    get ref_range_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.range_key`)
  }
    get ref_table_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.table_name`)
  }
}

