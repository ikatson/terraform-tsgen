import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_api_gateway_method_response_config {
    http_method: rstring
    resource_id: rstring
    response_models?: {[propName: string]: rstring}
    response_parameters?: {[propName: string]: rstring}
    response_parameters_in_json?: rstring
    rest_api_id: rstring
    status_code: rstring
}

export class aws_api_gateway_method_response implements Resource {
    config: aws_api_gateway_method_response_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_method_response"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_method_response_config) {
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
    
    get ref_http_method(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.http_method`)
    }
    get ref_resource_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_id`)
    }
    get ref_response_models(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.response_models`)
    }
    get ref_response_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.response_parameters`)
    }
    get ref_response_parameters_in_json(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.response_parameters_in_json`)
    }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rest_api_id`)
    }
    get ref_status_code(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status_code`)
    }
}

