import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_cloudwatch_log_metric_filter__metric_transformation {
    default_value?: rstring
    name: rstring
    namespace: rstring
    value: rstring
}

export interface aws_cloudwatch_log_metric_filter_config {
    log_group_name: rstring
    metric_transformation: _aws_cloudwatch_log_metric_filter__metric_transformation[]
    name: rstring
    pattern: rstring
}

export class aws_cloudwatch_log_metric_filter implements Resource {
    config: aws_cloudwatch_log_metric_filter_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudwatch_log_metric_filter"
    private _id: string;
    constructor(id: string, config: aws_cloudwatch_log_metric_filter_config) {
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
        return new Reference(`${this._name}.${this._id}.log_group_name`)
    }
    get ref_metric_transformation(): Reference<_aws_cloudwatch_log_metric_filter__metric_transformation[]> {
        return new Reference(`${this._name}.${this._id}.metric_transformation`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_pattern(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.pattern`)
    }
}

