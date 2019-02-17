import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_api_gateway_integration_response_config {
    content_handling?: rstring
    http_method: rstring
    resource_id: rstring
    response_parameters?: {[propName: string]: rstring}
    response_parameters_in_json?: rstring
    response_templates?: {[propName: string]: rstring}
    rest_api_id: rstring
    selection_pattern?: rstring
    status_code: rstring
}

export class data_aws_api_gateway_integration_response implements Data {
    config: data_aws_api_gateway_integration_response_config
    private _is_data: boolean = true
    private _name: string = "data_aws_api_gateway_integration_response"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_integration_response_config) {
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
    
    get ref_content_handling(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.content_handling`)
  }
    get ref_http_method(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.http_method`)
  }
    get ref_resource_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.resource_id`)
  }
    get ref_response_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.response_parameters`)
  }
    get ref_response_parameters_in_json(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.response_parameters_in_json`)
  }
    get ref_response_templates(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.response_templates`)
  }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rest_api_id`)
  }
    get ref_selection_pattern(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.selection_pattern`)
  }
    get ref_status_code(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status_code`)
  }
}

