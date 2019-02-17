import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_cognito_identity_pool_roles_attachment__role_mapping__mapping_rule {
    claim: rstring
    match_type: rstring
    role_arn: rstring
    value: rstring
}

export interface _data_aws_cognito_identity_pool_roles_attachment__role_mapping {
    ambiguous_role_resolution?: rstring
    identity_provider: rstring
    mapping_rule?: __data_aws_cognito_identity_pool_roles_attachment__role_mapping__mapping_rule[]
    type: rstring
}

export interface data_aws_cognito_identity_pool_roles_attachment_config {
    identity_pool_id: rstring
    role_mapping?: _data_aws_cognito_identity_pool_roles_attachment__role_mapping[]
    roles: {[propName: string]: rstring}
}

export class data_aws_cognito_identity_pool_roles_attachment implements Data {
    config: data_aws_cognito_identity_pool_roles_attachment_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cognito_identity_pool_roles_attachment"
    private _id: string;
    constructor(id: string, config: data_aws_cognito_identity_pool_roles_attachment_config) {
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
    
    get ref_identity_pool_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.identity_pool_id`)
  }
    get ref_role_mapping(): Reference<_data_aws_cognito_identity_pool_roles_attachment__role_mapping[]> {
        return new Reference(`data.${this._name}.${this._id}.role_mapping`)
  }
    get ref_roles(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.roles`)
  }
}

