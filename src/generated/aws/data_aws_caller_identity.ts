import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_caller_identity_config {
    account_id?: rstring
    arn?: rstring
    user_id?: rstring
}

export class data_aws_caller_identity implements Data {
    config: data_aws_caller_identity_config
    private _is_data: boolean = true
    private _name: string = "aws_caller_identity"
    private _id: string;
    constructor(id: string, config: data_aws_caller_identity_config) {
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
        return new Reference(`data.${this._name}.${this._id}.account_id`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_user_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_id`)
  }
}

