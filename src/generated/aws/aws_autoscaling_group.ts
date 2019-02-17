import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_autoscaling_group__initial_lifecycle_hook {
    default_result?: rstring
    heartbeat_timeout?: rnumber
    lifecycle_transition: rstring
    name: rstring
    notification_metadata?: rstring
    notification_target_arn?: rstring
    role_arn?: rstring
}

export interface _aws_autoscaling_group__launch_template {
    id?: rstring
    name?: rstring
    version?: rstring
}

export interface __aws_autoscaling_group__mixed_instances_policy__instances_distribution {
    on_demand_allocation_strategy?: rstring
    on_demand_base_capacity?: rnumber
    on_demand_percentage_above_base_capacity?: rnumber
    spot_allocation_strategy?: rstring
    spot_instance_pools?: rnumber
    spot_max_price?: rstring
}

export interface __aws_autoscaling_group__mixed_instances_policy__launch_template__launch_template_specification {
    launch_template_id?: rstring
    launch_template_name?: rstring
    version?: rstring
}

export interface __aws_autoscaling_group__mixed_instances_policy__launch_template__override {
    instance_type?: rstring
}

export interface __aws_autoscaling_group__mixed_instances_policy__launch_template {
    launch_template_specification: __aws_autoscaling_group__mixed_instances_policy__launch_template__launch_template_specification[]
    override?: __aws_autoscaling_group__mixed_instances_policy__launch_template__override[]
}

export interface _aws_autoscaling_group__mixed_instances_policy {
    instances_distribution?: __aws_autoscaling_group__mixed_instances_policy__instances_distribution[]
    launch_template: __aws_autoscaling_group__mixed_instances_policy__launch_template[]
}

export interface _aws_autoscaling_group__tag {
    key: rstring
    propagate_at_launch: rboolean
    value: rstring
}

export interface aws_autoscaling_group_config {
    arn?: rstring
    availability_zones?: rstring[]
    default_cooldown?: rnumber
    desired_capacity?: rnumber
    enabled_metrics?: rstring[]
    force_delete?: rboolean
    health_check_grace_period?: rnumber
    health_check_type?: rstring
    initial_lifecycle_hook?: _aws_autoscaling_group__initial_lifecycle_hook[]
    launch_configuration?: rstring
    launch_template?: _aws_autoscaling_group__launch_template[]
    load_balancers?: rstring[]
    max_size: rnumber
    metrics_granularity?: rstring
    min_elb_capacity?: rnumber
    min_size: rnumber
    mixed_instances_policy?: _aws_autoscaling_group__mixed_instances_policy[]
    name?: rstring
    name_prefix?: rstring
    placement_group?: rstring
    protect_from_scale_in?: rboolean
    service_linked_role_arn?: rstring
    suspended_processes?: rstring[]
    tag?: _aws_autoscaling_group__tag[]
    tags?: {[propName: string]: rstring}[]
    target_group_arns?: rstring[]
    termination_policies?: rstring[]
    vpc_zone_identifier?: rstring[]
    wait_for_capacity_timeout?: rstring
    wait_for_elb_capacity?: rnumber
}

export class aws_autoscaling_group implements Resource {
    config: aws_autoscaling_group_config
    private _is_data: boolean = false
    private _name: string = "aws_autoscaling_group"
    private _id: string;
    constructor(id: string, config: aws_autoscaling_group_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.availability_zones`)
    }
    get ref_default_cooldown(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.default_cooldown`)
    }
    get ref_desired_capacity(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.desired_capacity`)
    }
    get ref_enabled_metrics(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.enabled_metrics`)
    }
    get ref_force_delete(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.force_delete`)
    }
    get ref_health_check_grace_period(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.health_check_grace_period`)
    }
    get ref_health_check_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.health_check_type`)
    }
    get ref_initial_lifecycle_hook(): Reference<_aws_autoscaling_group__initial_lifecycle_hook[]> {
        return new Reference(`${this._name}.${this._id}.initial_lifecycle_hook`)
    }
    get ref_launch_configuration(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.launch_configuration`)
    }
    get ref_launch_template(): Reference<_aws_autoscaling_group__launch_template[]> {
        return new Reference(`${this._name}.${this._id}.launch_template`)
    }
    get ref_load_balancers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.load_balancers`)
    }
    get ref_max_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.max_size`)
    }
    get ref_metrics_granularity(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.metrics_granularity`)
    }
    get ref_min_elb_capacity(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.min_elb_capacity`)
    }
    get ref_min_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.min_size`)
    }
    get ref_mixed_instances_policy(): Reference<_aws_autoscaling_group__mixed_instances_policy[]> {
        return new Reference(`${this._name}.${this._id}.mixed_instances_policy`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_placement_group(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.placement_group`)
    }
    get ref_protect_from_scale_in(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.protect_from_scale_in`)
    }
    get ref_service_linked_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.service_linked_role_arn`)
    }
    get ref_suspended_processes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.suspended_processes`)
    }
    get ref_tag(): Reference<_aws_autoscaling_group__tag[]> {
        return new Reference(`${this._name}.${this._id}.tag`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}[]> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_target_group_arns(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.target_group_arns`)
    }
    get ref_termination_policies(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.termination_policies`)
    }
    get ref_vpc_zone_identifier(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.vpc_zone_identifier`)
    }
    get ref_wait_for_capacity_timeout(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.wait_for_capacity_timeout`)
    }
    get ref_wait_for_elb_capacity(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.wait_for_elb_capacity`)
    }
}

