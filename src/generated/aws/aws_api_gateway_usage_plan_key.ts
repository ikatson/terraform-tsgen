import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_api_gateway_usage_plan_key_config {
    key_id: rstring
    key_type: rstring
    name?: rstring
    usage_plan_id: rstring
    value?: rstring
}

export class aws_api_gateway_usage_plan_key implements Resource {
    config: aws_api_gateway_usage_plan_key_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_usage_plan_key"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_usage_plan_key_config) {
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
    
    get ref_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_id`)
    }
    get ref_key_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_type`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_usage_plan_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.usage_plan_id`)
    }
    get ref_value(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.value`)
    }
}

