import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_api_gateway_account__throttle_settings {
    burst_limit?: rnumber
    rate_limit?: rnumber
}

export interface aws_api_gateway_account_config {
    cloudwatch_role_arn?: rstring
    throttle_settings?: _aws_api_gateway_account__throttle_settings[]
}

export class aws_api_gateway_account implements Resource {
    config: aws_api_gateway_account_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_account"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_account_config) {
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
    
    get ref_cloudwatch_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cloudwatch_role_arn`)
    }
    get ref_throttle_settings(): Reference<_aws_api_gateway_account__throttle_settings[]> {
        return new Reference(`${this._name}.${this._id}.throttle_settings`)
    }
}

