import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_dynamodb_table_item_config {
    hash_key: rstring
    item: rstring
    range_key?: rstring
    table_name: rstring
}

export class aws_dynamodb_table_item implements Resource {
    config: aws_dynamodb_table_item_config
    private _is_data: boolean = false
    private _name: string = "aws_dynamodb_table_item"
    private _id: string;
    constructor(id: string, config: aws_dynamodb_table_item_config) {
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
        return new Reference(`${this._name}.${this._id}.hash_key`)
    }
    get ref_item(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.item`)
    }
    get ref_range_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.range_key`)
    }
    get ref_table_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.table_name`)
    }
}

