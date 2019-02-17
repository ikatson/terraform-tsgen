import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_api_gateway_method_config {
    api_key_required?: rboolean
    authorization: rstring
    authorization_scopes?: rstring[]
    authorizer_id?: rstring
    http_method: rstring
    request_models?: {[propName: string]: rstring}
    request_parameters?: {[propName: string]: rstring}
    request_parameters_in_json?: rstring
    request_validator_id?: rstring
    resource_id: rstring
    rest_api_id: rstring
}

export class data_aws_api_gateway_method implements Data {
    config: data_aws_api_gateway_method_config
    private _is_data: boolean = true
    private _name: string = "data_aws_api_gateway_method"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_method_config) {
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
    
    get ref_api_key_required(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.api_key_required`)
  }
    get ref_authorization(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.authorization`)
  }
    get ref_authorization_scopes(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.authorization_scopes`)
  }
    get ref_authorizer_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.authorizer_id`)
  }
    get ref_http_method(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.http_method`)
  }
    get ref_request_models(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.request_models`)
  }
    get ref_request_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.request_parameters`)
  }
    get ref_request_parameters_in_json(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.request_parameters_in_json`)
  }
    get ref_request_validator_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.request_validator_id`)
  }
    get ref_resource_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.resource_id`)
  }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rest_api_id`)
  }
}

