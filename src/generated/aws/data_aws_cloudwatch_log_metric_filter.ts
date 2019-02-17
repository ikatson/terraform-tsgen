import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_cloudwatch_log_metric_filter__metric_transformation {
    default_value?: rstring
    name: rstring
    namespace: rstring
    value: rstring
}

export interface data_aws_cloudwatch_log_metric_filter_config {
    log_group_name: rstring
    metric_transformation: _data_aws_cloudwatch_log_metric_filter__metric_transformation[]
    name: rstring
    pattern: rstring
}

export class data_aws_cloudwatch_log_metric_filter implements Data {
    config: data_aws_cloudwatch_log_metric_filter_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cloudwatch_log_metric_filter"
    private _id: string;
    constructor(id: string, config: data_aws_cloudwatch_log_metric_filter_config) {
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
    
    get ref_log_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.log_group_name`)
  }
    get ref_metric_transformation(): Reference<_data_aws_cloudwatch_log_metric_filter__metric_transformation[]> {
        return new Reference(`data.${this._name}.${this._id}.metric_transformation`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_pattern(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.pattern`)
  }
}

