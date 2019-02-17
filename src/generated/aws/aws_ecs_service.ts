import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ecs_service__deployment_controller {
    type?: rstring
}

export interface _aws_ecs_service__load_balancer {
    container_name: rstring
    container_port: rnumber
    elb_name?: rstring
    target_group_arn?: rstring
}

export interface _aws_ecs_service__network_configuration {
    assign_public_ip?: rboolean
    security_groups?: rstring[]
    subnets: rstring[]
}

export interface _aws_ecs_service__ordered_placement_strategy {
    field?: rstring
    type: rstring
}

export interface _aws_ecs_service__placement_constraints {
    expression?: rstring
    type: rstring
}

export interface _aws_ecs_service__placement_strategy {
    field?: rstring
    type: rstring
}

export interface _aws_ecs_service__service_registries {
    container_name?: rstring
    container_port?: rnumber
    port?: rnumber
    registry_arn: rstring
}

export interface aws_ecs_service_config {
    cluster?: rstring
    deployment_controller?: _aws_ecs_service__deployment_controller[]
    deployment_maximum_percent?: rnumber
    deployment_minimum_healthy_percent?: rnumber
    desired_count?: rnumber
    enable_ecs_managed_tags?: rboolean
    health_check_grace_period_seconds?: rnumber
    iam_role?: rstring
    launch_type?: rstring
    load_balancer?: _aws_ecs_service__load_balancer[]
    name: rstring
    network_configuration?: _aws_ecs_service__network_configuration[]
    ordered_placement_strategy?: _aws_ecs_service__ordered_placement_strategy[]
    placement_constraints?: _aws_ecs_service__placement_constraints[]
    placement_strategy?: _aws_ecs_service__placement_strategy[]
    platform_version?: rstring
    propagate_tags?: rstring
    scheduling_strategy?: rstring
    service_registries?: _aws_ecs_service__service_registries[]
    tags?: {[propName: string]: rstring}
    task_definition: rstring
}

export class aws_ecs_service implements Resource {
    config: aws_ecs_service_config
    private _is_data: boolean = false
    private _name: string = "aws_ecs_service"
    private _id: string;
    constructor(id: string, config: aws_ecs_service_config) {
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
    
    get ref_cluster(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster`)
    }
    get ref_deployment_controller(): Reference<_aws_ecs_service__deployment_controller[]> {
        return new Reference(`${this._name}.${this._id}.deployment_controller`)
    }
    get ref_deployment_maximum_percent(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.deployment_maximum_percent`)
    }
    get ref_deployment_minimum_healthy_percent(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.deployment_minimum_healthy_percent`)
    }
    get ref_desired_count(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.desired_count`)
    }
    get ref_enable_ecs_managed_tags(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_ecs_managed_tags`)
    }
    get ref_health_check_grace_period_seconds(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.health_check_grace_period_seconds`)
    }
    get ref_iam_role(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.iam_role`)
    }
    get ref_launch_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.launch_type`)
    }
    get ref_load_balancer(): Reference<_aws_ecs_service__load_balancer[]> {
        return new Reference(`${this._name}.${this._id}.load_balancer`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_network_configuration(): Reference<_aws_ecs_service__network_configuration[]> {
        return new Reference(`${this._name}.${this._id}.network_configuration`)
    }
    get ref_ordered_placement_strategy(): Reference<_aws_ecs_service__ordered_placement_strategy[]> {
        return new Reference(`${this._name}.${this._id}.ordered_placement_strategy`)
    }
    get ref_placement_constraints(): Reference<_aws_ecs_service__placement_constraints[]> {
        return new Reference(`${this._name}.${this._id}.placement_constraints`)
    }
    get ref_placement_strategy(): Reference<_aws_ecs_service__placement_strategy[]> {
        return new Reference(`${this._name}.${this._id}.placement_strategy`)
    }
    get ref_platform_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.platform_version`)
    }
    get ref_propagate_tags(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.propagate_tags`)
    }
    get ref_scheduling_strategy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.scheduling_strategy`)
    }
    get ref_service_registries(): Reference<_aws_ecs_service__service_registries[]> {
        return new Reference(`${this._name}.${this._id}.service_registries`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_task_definition(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.task_definition`)
    }
}

