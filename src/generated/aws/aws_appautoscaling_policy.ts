import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_appautoscaling_policy__step_adjustment {
    metric_interval_lower_bound?: rstring
    metric_interval_upper_bound?: rstring
    scaling_adjustment: rnumber
}

export interface __aws_appautoscaling_policy__step_scaling_policy_configuration__step_adjustment {
    metric_interval_lower_bound?: rstring
    metric_interval_upper_bound?: rstring
    scaling_adjustment: rnumber
}

export interface _aws_appautoscaling_policy__step_scaling_policy_configuration {
    adjustment_type?: rstring
    cooldown?: rnumber
    metric_aggregation_type?: rstring
    min_adjustment_magnitude?: rnumber
    step_adjustment?: __aws_appautoscaling_policy__step_scaling_policy_configuration__step_adjustment[]
}

export interface __aws_appautoscaling_policy__target_tracking_scaling_policy_configuration__customized_metric_specification__dimensions {
    name: rstring
    value: rstring
}

export interface __aws_appautoscaling_policy__target_tracking_scaling_policy_configuration__customized_metric_specification {
    dimensions?: __aws_appautoscaling_policy__target_tracking_scaling_policy_configuration__customized_metric_specification__dimensions[]
    metric_name: rstring
    namespace: rstring
    statistic: rstring
    unit?: rstring
}

export interface __aws_appautoscaling_policy__target_tracking_scaling_policy_configuration__predefined_metric_specification {
    predefined_metric_type: rstring
    resource_label?: rstring
}

export interface _aws_appautoscaling_policy__target_tracking_scaling_policy_configuration {
    customized_metric_specification?: __aws_appautoscaling_policy__target_tracking_scaling_policy_configuration__customized_metric_specification[]
    disable_scale_in?: rboolean
    predefined_metric_specification?: __aws_appautoscaling_policy__target_tracking_scaling_policy_configuration__predefined_metric_specification[]
    scale_in_cooldown?: rnumber
    scale_out_cooldown?: rnumber
    target_value: rnumber
}

export interface aws_appautoscaling_policy_config {
    adjustment_type?: rstring
    alarms?: rstring[]
    arn?: rstring
    cooldown?: rnumber
    metric_aggregation_type?: rstring
    min_adjustment_magnitude?: rnumber
    name: rstring
    policy_type?: rstring
    resource_id: rstring
    scalable_dimension: rstring
    service_namespace: rstring
    step_adjustment?: _aws_appautoscaling_policy__step_adjustment[]
    step_scaling_policy_configuration?: _aws_appautoscaling_policy__step_scaling_policy_configuration[]
    target_tracking_scaling_policy_configuration?: _aws_appautoscaling_policy__target_tracking_scaling_policy_configuration[]
}

export class aws_appautoscaling_policy implements Resource {
    config: aws_appautoscaling_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_appautoscaling_policy"
    private _id: string;
    constructor(id: string, config: aws_appautoscaling_policy_config) {
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
        return new Reference(`${this._name}.${this._id}.adjustment_type`)
    }
    get ref_alarms(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.alarms`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_cooldown(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.cooldown`)
    }
    get ref_metric_aggregation_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.metric_aggregation_type`)
    }
    get ref_min_adjustment_magnitude(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.min_adjustment_magnitude`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_policy_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy_type`)
    }
    get ref_resource_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_id`)
    }
    get ref_scalable_dimension(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.scalable_dimension`)
    }
    get ref_service_namespace(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.service_namespace`)
    }
    get ref_step_adjustment(): Reference<_aws_appautoscaling_policy__step_adjustment[]> {
        return new Reference(`${this._name}.${this._id}.step_adjustment`)
    }
    get ref_step_scaling_policy_configuration(): Reference<_aws_appautoscaling_policy__step_scaling_policy_configuration[]> {
        return new Reference(`${this._name}.${this._id}.step_scaling_policy_configuration`)
    }
    get ref_target_tracking_scaling_policy_configuration(): Reference<_aws_appautoscaling_policy__target_tracking_scaling_policy_configuration[]> {
        return new Reference(`${this._name}.${this._id}.target_tracking_scaling_policy_configuration`)
    }
}

