import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_api_gateway_account__throttle_settings {
    burst_limit?: rnumber
    rate_limit?: rnumber
}

export interface data_aws_api_gateway_account_config {
    cloudwatch_role_arn?: rstring
    throttle_settings?: _data_aws_api_gateway_account__throttle_settings[]
}

export class data_aws_api_gateway_account implements Data {
    config: data_aws_api_gateway_account_config
    private _is_data: boolean = true
    private _name: string = "data_aws_api_gateway_account"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_account_config) {
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
        return new Reference(`data.${this._name}.${this._id}.cloudwatch_role_arn`)
  }
    get ref_throttle_settings(): Reference<_data_aws_api_gateway_account__throttle_settings[]> {
        return new Reference(`data.${this._name}.${this._id}.throttle_settings`)
  }
}

