import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_autoscaling_policy__step_adjustment {
    metric_interval_lower_bound?: rstring
    metric_interval_upper_bound?: rstring
    scaling_adjustment: rnumber
}

export interface __data_aws_autoscaling_policy__target_tracking_configuration__customized_metric_specification__metric_dimension {
    name: rstring
    value: rstring
}

export interface __data_aws_autoscaling_policy__target_tracking_configuration__customized_metric_specification {
    metric_dimension?: __data_aws_autoscaling_policy__target_tracking_configuration__customized_metric_specification__metric_dimension[]
    metric_name: rstring
    namespace: rstring
    statistic: rstring
    unit?: rstring
}

export interface __data_aws_autoscaling_policy__target_tracking_configuration__predefined_metric_specification {
    predefined_metric_type: rstring
    resource_label?: rstring
}

export interface _data_aws_autoscaling_policy__target_tracking_configuration {
    customized_metric_specification?: __data_aws_autoscaling_policy__target_tracking_configuration__customized_metric_specification[]
    disable_scale_in?: rboolean
    predefined_metric_specification?: __data_aws_autoscaling_policy__target_tracking_configuration__predefined_metric_specification[]
    target_value: rnumber
}

export interface data_aws_autoscaling_policy_config {
    adjustment_type?: rstring
    arn?: rstring
    autoscaling_group_name: rstring
    cooldown?: rnumber
    estimated_instance_warmup?: rnumber
    metric_aggregation_type?: rstring
    min_adjustment_magnitude?: rnumber
    min_adjustment_step?: rnumber
    name: rstring
    policy_type?: rstring
    scaling_adjustment?: rnumber
    step_adjustment?: _data_aws_autoscaling_policy__step_adjustment[]
    target_tracking_configuration?: _data_aws_autoscaling_policy__target_tracking_configuration[]
}

export class data_aws_autoscaling_policy implements Data {
    config: data_aws_autoscaling_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_autoscaling_policy"
    private _id: string;
    constructor(id: string, config: data_aws_autoscaling_policy_config) {
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
    
    get ref_adjustment_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.adjustment_type`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_autoscaling_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.autoscaling_group_name`)
  }
    get ref_cooldown(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.cooldown`)
  }
    get ref_estimated_instance_warmup(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.estimated_instance_warmup`)
  }
    get ref_metric_aggregation_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.metric_aggregation_type`)
  }
    get ref_min_adjustment_magnitude(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.min_adjustment_magnitude`)
  }
    get ref_min_adjustment_step(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.min_adjustment_step`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_policy_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy_type`)
  }
    get ref_scaling_adjustment(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.scaling_adjustment`)
  }
    get ref_step_adjustment(): Reference<_data_aws_autoscaling_policy__step_adjustment[]> {
        return new Reference(`data.${this._name}.${this._id}.step_adjustment`)
  }
    get ref_target_tracking_configuration(): Reference<_data_aws_autoscaling_policy__target_tracking_configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.target_tracking_configuration`)
  }
}

