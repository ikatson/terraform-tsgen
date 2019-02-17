import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_cloudwatch_log_subscription_filter_config {
    destination_arn: rstring
    distribution?: rstring
    filter_pattern: rstring
    log_group_name: rstring
    name: rstring
    role_arn?: rstring
}

export class data_aws_cloudwatch_log_subscription_filter implements Data {
    config: data_aws_cloudwatch_log_subscription_filter_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cloudwatch_log_subscription_filter"
    private _id: string;
    constructor(id: string, config: data_aws_cloudwatch_log_subscription_filter_config) {
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
    
    get ref_destination_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.destination_arn`)
  }
    get ref_distribution(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.distribution`)
  }
    get ref_filter_pattern(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.filter_pattern`)
  }
    get ref_log_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.log_group_name`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
}

