import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cognito_user_pool_client_config {
    allowed_oauth_flows?: rstring[]
    allowed_oauth_flows_user_pool_client?: rboolean
    allowed_oauth_scopes?: rstring[]
    callback_urls?: rstring[]
    client_secret?: rstring
    default_redirect_uri?: rstring
    explicit_auth_flows?: rstring[]
    generate_secret?: rboolean
    logout_urls?: rstring[]
    name: rstring
    read_attributes?: rstring[]
    refresh_token_validity?: rnumber
    supported_identity_providers?: rstring[]
    user_pool_id: rstring
    write_attributes?: rstring[]
}

export class aws_cognito_user_pool_client implements Resource {
    config: aws_cognito_user_pool_client_config
    private _is_data: boolean = false
    private _name: string = "aws_cognito_user_pool_client"
    private _id: string;
    constructor(id: string, config: aws_cognito_user_pool_client_config) {
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
    
    get ref_allowed_oauth_flows(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.allowed_oauth_flows`)
    }
    get ref_allowed_oauth_flows_user_pool_client(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.allowed_oauth_flows_user_pool_client`)
    }
    get ref_allowed_oauth_scopes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.allowed_oauth_scopes`)
    }
    get ref_callback_urls(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.callback_urls`)
    }
    get ref_client_secret(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.client_secret`)
    }
    get ref_default_redirect_uri(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_redirect_uri`)
    }
    get ref_explicit_auth_flows(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.explicit_auth_flows`)
    }
    get ref_generate_secret(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.generate_secret`)
    }
    get ref_logout_urls(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.logout_urls`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_read_attributes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.read_attributes`)
    }
    get ref_refresh_token_validity(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.refresh_token_validity`)
    }
    get ref_supported_identity_providers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.supported_identity_providers`)
    }
    get ref_user_pool_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.user_pool_id`)
    }
    get ref_write_attributes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.write_attributes`)
    }
}

