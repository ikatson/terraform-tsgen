import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_cognito_identity_pool_roles_attachment__role_mapping__mapping_rule {
    claim: rstring
    match_type: rstring
    role_arn: rstring
    value: rstring
}

export interface _aws_cognito_identity_pool_roles_attachment__role_mapping {
    ambiguous_role_resolution?: rstring
    identity_provider: rstring
    mapping_rule?: __aws_cognito_identity_pool_roles_attachment__role_mapping__mapping_rule[]
    type: rstring
}

export interface aws_cognito_identity_pool_roles_attachment_config {
    identity_pool_id: rstring
    role_mapping?: _aws_cognito_identity_pool_roles_attachment__role_mapping[]
    roles: {[propName: string]: rstring}
}

export class aws_cognito_identity_pool_roles_attachment implements Resource {
    config: aws_cognito_identity_pool_roles_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_cognito_identity_pool_roles_attachment"
    private _id: string;
    constructor(id: string, config: aws_cognito_identity_pool_roles_attachment_config) {
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
        return new Reference(`${this._name}.${this._id}.identity_pool_id`)
    }
    get ref_role_mapping(): Reference<_aws_cognito_identity_pool_roles_attachment__role_mapping[]> {
        return new Reference(`${this._name}.${this._id}.role_mapping`)
    }
    get ref_roles(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.roles`)
    }
}

