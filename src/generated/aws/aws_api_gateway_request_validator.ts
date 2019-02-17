import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_api_gateway_request_validator_config {
    name: rstring
    rest_api_id: rstring
    validate_request_body?: rboolean
    validate_request_parameters?: rboolean
}

export class aws_api_gateway_request_validator implements Resource {
    config: aws_api_gateway_request_validator_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_request_validator"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_request_validator_config) {
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
    
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rest_api_id`)
    }
    get ref_validate_request_body(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.validate_request_body`)
    }
    get ref_validate_request_parameters(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.validate_request_parameters`)
    }
}

