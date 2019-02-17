import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_cognito_user_group_config {
    description?: rstring
    name: rstring
    precedence?: rnumber
    role_arn?: rstring
    user_pool_id: rstring
}

export class data_aws_cognito_user_group implements Data {
    config: data_aws_cognito_user_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cognito_user_group"
    private _id: string;
    constructor(id: string, config: data_aws_cognito_user_group_config) {
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
    
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_precedence(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.precedence`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
    get ref_user_pool_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_pool_id`)
  }
}

