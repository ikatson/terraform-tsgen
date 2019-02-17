import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_api_gateway_integration_config {
    cache_key_parameters?: rstring[]
    cache_namespace?: rstring
    connection_id?: rstring
    connection_type?: rstring
    content_handling?: rstring
    credentials?: rstring
    http_method: rstring
    integration_http_method?: rstring
    passthrough_behavior?: rstring
    request_parameters?: {[propName: string]: rstring}
    request_parameters_in_json?: rstring
    request_templates?: {[propName: string]: rstring}
    resource_id: rstring
    rest_api_id: rstring
    timeout_milliseconds?: rnumber
    type: rstring
    uri?: rstring
}

export class data_aws_api_gateway_integration implements Data {
    config: data_aws_api_gateway_integration_config
    private _is_data: boolean = true
    private _name: string = "data_aws_api_gateway_integration"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_integration_config) {
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
    
    get ref_cache_key_parameters(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.cache_key_parameters`)
  }
    get ref_cache_namespace(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cache_namespace`)
  }
    get ref_connection_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.connection_id`)
  }
    get ref_connection_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.connection_type`)
  }
    get ref_content_handling(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.content_handling`)
  }
    get ref_credentials(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.credentials`)
  }
    get ref_http_method(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.http_method`)
  }
    get ref_integration_http_method(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.integration_http_method`)
  }
    get ref_passthrough_behavior(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.passthrough_behavior`)
  }
    get ref_request_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.request_parameters`)
  }
    get ref_request_parameters_in_json(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.request_parameters_in_json`)
  }
    get ref_request_templates(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.request_templates`)
  }
    get ref_resource_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.resource_id`)
  }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rest_api_id`)
  }
    get ref_timeout_milliseconds(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.timeout_milliseconds`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
    get ref_uri(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.uri`)
  }
}

