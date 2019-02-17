import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_api_gateway_authorizer_config {
    authorizer_credentials?: rstring
    authorizer_result_ttl_in_seconds?: rnumber
    authorizer_uri?: rstring
    identity_source?: rstring
    identity_validation_expression?: rstring
    name: rstring
    provider_arns?: rstring[]
    rest_api_id: rstring
    type?: rstring
}

export class data_aws_api_gateway_authorizer implements Data {
    config: data_aws_api_gateway_authorizer_config
    private _is_data: boolean = true
    private _name: string = "data_aws_api_gateway_authorizer"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_authorizer_config) {
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
    
    get ref_authorizer_credentials(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.authorizer_credentials`)
  }
    get ref_authorizer_result_ttl_in_seconds(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.authorizer_result_ttl_in_seconds`)
  }
    get ref_authorizer_uri(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.authorizer_uri`)
  }
    get ref_identity_source(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.identity_source`)
  }
    get ref_identity_validation_expression(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.identity_validation_expression`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_provider_arns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.provider_arns`)
  }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rest_api_id`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

