import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_cognito_resource_server__scope {
    scope_description: rstring
    scope_name: rstring
}

export interface data_aws_cognito_resource_server_config {
    identifier: rstring
    name: rstring
    scope?: _data_aws_cognito_resource_server__scope[]
    scope_identifiers?: rstring[]
    user_pool_id: rstring
}

export class data_aws_cognito_resource_server implements Data {
    config: data_aws_cognito_resource_server_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cognito_resource_server"
    private _id: string;
    constructor(id: string, config: data_aws_cognito_resource_server_config) {
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
    
    get ref_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.identifier`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_scope(): Reference<_data_aws_cognito_resource_server__scope[]> {
        return new Reference(`data.${this._name}.${this._id}.scope`)
  }
    get ref_scope_identifiers(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.scope_identifiers`)
  }
    get ref_user_pool_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_pool_id`)
  }
}

