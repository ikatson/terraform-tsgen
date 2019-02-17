import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_api_gateway_rest_api__endpoint_configuration {
    types: rstring[]
}

export interface aws_api_gateway_rest_api_config {
    api_key_source?: rstring
    binary_media_types?: rstring[]
    body?: rstring
    created_date?: rstring
    description?: rstring
    endpoint_configuration?: _aws_api_gateway_rest_api__endpoint_configuration[]
    execution_arn?: rstring
    minimum_compression_size?: rnumber
    name: rstring
    policy?: rstring
    root_resource_id?: rstring
}

export class aws_api_gateway_rest_api implements Resource {
    config: aws_api_gateway_rest_api_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_rest_api"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_rest_api_config) {
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
    
    get ref_api_key_source(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.api_key_source`)
    }
    get ref_binary_media_types(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.binary_media_types`)
    }
    get ref_body(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.body`)
    }
    get ref_created_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.created_date`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_endpoint_configuration(): Reference<_aws_api_gateway_rest_api__endpoint_configuration[]> {
        return new Reference(`${this._name}.${this._id}.endpoint_configuration`)
    }
    get ref_execution_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.execution_arn`)
    }
    get ref_minimum_compression_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.minimum_compression_size`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_root_resource_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.root_resource_id`)
    }
}

