import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_config_aggregate_authorization_config {
    account_id: rstring
    arn?: rstring
    region: rstring
}

export class aws_config_aggregate_authorization implements Resource {
    config: aws_config_aggregate_authorization_config
    private _is_data: boolean = false
    private _name: string = "aws_config_aggregate_authorization"
    private _id: string;
    constructor(id: string, config: aws_config_aggregate_authorization_config) {
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
    
    get ref_account_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.account_id`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_region(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.region`)
    }
}

