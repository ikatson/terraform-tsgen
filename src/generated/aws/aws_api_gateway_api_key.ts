import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_api_gateway_api_key__stage_key {
    rest_api_id: rstring
    stage_name: rstring
}

export interface aws_api_gateway_api_key_config {
    created_date?: rstring
    description?: rstring
    enabled?: rboolean
    last_updated_date?: rstring
    name: rstring
    stage_key?: _aws_api_gateway_api_key__stage_key[]
    value?: rstring
}

export class aws_api_gateway_api_key implements Resource {
    config: aws_api_gateway_api_key_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_api_key"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_api_key_config) {
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
    
    get ref_created_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.created_date`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_last_updated_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.last_updated_date`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_stage_key(): Reference<_aws_api_gateway_api_key__stage_key[]> {
        return new Reference(`${this._name}.${this._id}.stage_key`)
    }
    get ref_value(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.value`)
    }
}

