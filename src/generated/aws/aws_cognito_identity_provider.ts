import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cognito_identity_provider_config {
    attribute_mapping?: {[propName: string]: rstring}
    idp_identifiers?: rstring[]
    provider_details: {[propName: string]: rstring}
    provider_name: rstring
    provider_type: rstring
    user_pool_id: rstring
}

export class aws_cognito_identity_provider implements Resource {
    config: aws_cognito_identity_provider_config
    private _is_data: boolean = false
    private _name: string = "aws_cognito_identity_provider"
    private _id: string;
    constructor(id: string, config: aws_cognito_identity_provider_config) {
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
    
    get ref_attribute_mapping(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.attribute_mapping`)
    }
    get ref_idp_identifiers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.idp_identifiers`)
    }
    get ref_provider_details(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.provider_details`)
    }
    get ref_provider_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.provider_name`)
    }
    get ref_provider_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.provider_type`)
    }
    get ref_user_pool_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.user_pool_id`)
    }
}

