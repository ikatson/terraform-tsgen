import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_cognito_identity_pool__cognito_identity_providers {
    client_id?: rstring
    provider_name?: rstring
    server_side_token_check?: rboolean
}

export interface data_aws_cognito_identity_pool_config {
    allow_unauthenticated_identities?: rboolean
    arn?: rstring
    cognito_identity_providers?: _data_aws_cognito_identity_pool__cognito_identity_providers[]
    developer_provider_name?: rstring
    identity_pool_name: rstring
    openid_connect_provider_arns?: rstring[]
    saml_provider_arns?: rstring[]
    supported_login_providers?: {[propName: string]: rstring}
}

export class data_aws_cognito_identity_pool implements Data {
    config: data_aws_cognito_identity_pool_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cognito_identity_pool"
    private _id: string;
    constructor(id: string, config: data_aws_cognito_identity_pool_config) {
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
    
    get ref_allow_unauthenticated_identities(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.allow_unauthenticated_identities`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_cognito_identity_providers(): Reference<_data_aws_cognito_identity_pool__cognito_identity_providers[]> {
        return new Reference(`data.${this._name}.${this._id}.cognito_identity_providers`)
  }
    get ref_developer_provider_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.developer_provider_name`)
  }
    get ref_identity_pool_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.identity_pool_name`)
  }
    get ref_openid_connect_provider_arns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.openid_connect_provider_arns`)
  }
    get ref_saml_provider_arns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.saml_provider_arns`)
  }
    get ref_supported_login_providers(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.supported_login_providers`)
  }
}

