import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_cloudwatch_metric_alarm__metric_query__metric {
    dimensions?: {[propName: string]: rstring}
    metric_name: rstring
    namespace?: rstring
    period: rnumber
    stat: rstring
    unit?: rstring
}

export interface _data_aws_cloudwatch_metric_alarm__metric_query {
    expression?: rstring
    id: rstring
    label?: rstring
    metric?: __data_aws_cloudwatch_metric_alarm__metric_query__metric[]
    return_data?: rboolean
}

export interface data_aws_cloudwatch_metric_alarm_config {
    actions_enabled?: rboolean
    alarm_actions?: rstring[]
    alarm_description?: rstring
    alarm_name: rstring
    arn?: rstring
    comparison_operator: rstring
    datapoints_to_alarm?: rnumber
    dimensions?: {[propName: string]: rstring}
    evaluate_low_sample_count_percentiles?: rstring
    evaluation_periods: rnumber
    extended_statistic?: rstring
    insufficient_data_actions?: rstring[]
    metric_name?: rstring
    metric_query?: _data_aws_cloudwatch_metric_alarm__metric_query[]
    namespace?: rstring
    ok_actions?: rstring[]
    period?: rnumber
    statistic?: rstring
    threshold: rnumber
    treat_missing_data?: rstring
    unit?: rstring
}

export class data_aws_cloudwatch_metric_alarm implements Data {
    config: data_aws_cloudwatch_metric_alarm_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cloudwatch_metric_alarm"
    private _id: string;
    constructor(id: string, config: data_aws_cloudwatch_metric_alarm_config) {
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
    
    get ref_actions_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.actions_enabled`)
  }
    get ref_alarm_actions(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.alarm_actions`)
  }
    get ref_alarm_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.alarm_description`)
  }
    get ref_alarm_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.alarm_name`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_comparison_operator(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.comparison_operator`)
  }
    get ref_datapoints_to_alarm(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.datapoints_to_alarm`)
  }
    get ref_dimensions(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.dimensions`)
  }
    get ref_evaluate_low_sample_count_percentiles(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.evaluate_low_sample_count_percentiles`)
  }
    get ref_evaluation_periods(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.evaluation_periods`)
  }
    get ref_extended_statistic(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.extended_statistic`)
  }
    get ref_insufficient_data_actions(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.insufficient_data_actions`)
  }
    get ref_metric_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.metric_name`)
  }
    get ref_metric_query(): Reference<_data_aws_cloudwatch_metric_alarm__metric_query[]> {
        return new Reference(`data.${this._name}.${this._id}.metric_query`)
  }
    get ref_namespace(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.namespace`)
  }
    get ref_ok_actions(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ok_actions`)
  }
    get ref_period(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.period`)
  }
    get ref_statistic(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.statistic`)
  }
    get ref_threshold(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.threshold`)
  }
    get ref_treat_missing_data(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.treat_missing_data`)
  }
    get ref_unit(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.unit`)
  }
}

