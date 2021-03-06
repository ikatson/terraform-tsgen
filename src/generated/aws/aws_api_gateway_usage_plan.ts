import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_api_gateway_usage_plan__api_stages {
    api_id: rstring
    stage: rstring
}

export interface _aws_api_gateway_usage_plan__quota_settings {
    limit: rnumber
    offset?: rnumber
    period: rstring
}

export interface _aws_api_gateway_usage_plan__throttle_settings {
    burst_limit?: rnumber
    rate_limit?: rnumber
}

export interface aws_api_gateway_usage_plan_config {
    api_stages?: _aws_api_gateway_usage_plan__api_stages[]
    description?: rstring
    name: rstring
    product_code?: rstring
    quota_settings?: _aws_api_gateway_usage_plan__quota_settings[]
    throttle_settings?: _aws_api_gateway_usage_plan__throttle_settings[]
}

export class aws_api_gateway_usage_plan implements Resource {
    config: aws_api_gateway_usage_plan_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_usage_plan"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_usage_plan_config) {
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
    
    get ref_api_stages(): Reference<_aws_api_gateway_usage_plan__api_stages[]> {
        return new Reference(`${this._name}.${this._id}.api_stages`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_product_code(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.product_code`)
    }
    get ref_quota_settings(): Reference<_aws_api_gateway_usage_plan__quota_settings[]> {
        return new Reference(`${this._name}.${this._id}.quota_settings`)
    }
    get ref_throttle_settings(): Reference<_aws_api_gateway_usage_plan__throttle_settings[]> {
        return new Reference(`${this._name}.${this._id}.throttle_settings`)
    }
}

