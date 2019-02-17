import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_codedeploy_deployment_group__alarm_configuration {
    alarms?: rstring[]
    enabled?: rboolean
    ignore_poll_alarm_failure?: rboolean
}

export interface _data_aws_codedeploy_deployment_group__auto_rollback_configuration {
    enabled?: rboolean
    events?: rstring[]
}

export interface __data_aws_codedeploy_deployment_group__blue_green_deployment_config__deployment_ready_option {
    action_on_timeout?: rstring
    wait_time_in_minutes?: rnumber
}

export interface __data_aws_codedeploy_deployment_group__blue_green_deployment_config__green_fleet_provisioning_option {
    action?: rstring
}

export interface __data_aws_codedeploy_deployment_group__blue_green_deployment_config__terminate_blue_instances_on_deployment_success {
    action?: rstring
    termination_wait_time_in_minutes?: rnumber
}

export interface _data_aws_codedeploy_deployment_group__blue_green_deployment_config {
    deployment_ready_option?: __data_aws_codedeploy_deployment_group__blue_green_deployment_config__deployment_ready_option[]
    green_fleet_provisioning_option?: __data_aws_codedeploy_deployment_group__blue_green_deployment_config__green_fleet_provisioning_option[]
    terminate_blue_instances_on_deployment_success?: __data_aws_codedeploy_deployment_group__blue_green_deployment_config__terminate_blue_instances_on_deployment_success[]
}

export interface _data_aws_codedeploy_deployment_group__deployment_style {
    deployment_option?: rstring
    deployment_type?: rstring
}

export interface _data_aws_codedeploy_deployment_group__ec2_tag_filter {
    key?: rstring
    type?: rstring
    value?: rstring
}

export interface __data_aws_codedeploy_deployment_group__ec2_tag_set__ec2_tag_filter {
    key?: rstring
    type?: rstring
    value?: rstring
}

export interface _data_aws_codedeploy_deployment_group__ec2_tag_set {
    ec2_tag_filter?: __data_aws_codedeploy_deployment_group__ec2_tag_set__ec2_tag_filter[]
}

export interface _data_aws_codedeploy_deployment_group__ecs_service {
    cluster_name: rstring
    service_name: rstring
}

export interface __data_aws_codedeploy_deployment_group__load_balancer_info__elb_info {
    name?: rstring
}

export interface __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_info {
    name?: rstring
}

export interface __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_pair_info__prod_traffic_route {
    listener_arns: rstring[]
}

export interface __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_pair_info__target_group {
    name: rstring
}

export interface __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_pair_info__test_traffic_route {
    listener_arns: rstring[]
}

export interface __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_pair_info {
    prod_traffic_route: __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_pair_info__prod_traffic_route[]
    target_group: __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_pair_info__target_group[]
    test_traffic_route?: __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_pair_info__test_traffic_route[]
}

export interface _data_aws_codedeploy_deployment_group__load_balancer_info {
    elb_info?: __data_aws_codedeploy_deployment_group__load_balancer_info__elb_info[]
    target_group_info?: __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_info[]
    target_group_pair_info?: __data_aws_codedeploy_deployment_group__load_balancer_info__target_group_pair_info[]
}

export interface _data_aws_codedeploy_deployment_group__on_premises_instance_tag_filter {
    key?: rstring
    type?: rstring
    value?: rstring
}

export interface _data_aws_codedeploy_deployment_group__trigger_configuration {
    trigger_events: rstring[]
    trigger_name: rstring
    trigger_target_arn: rstring
}

export interface data_aws_codedeploy_deployment_group_config {
    alarm_configuration?: _data_aws_codedeploy_deployment_group__alarm_configuration[]
    app_name: rstring
    auto_rollback_configuration?: _data_aws_codedeploy_deployment_group__auto_rollback_configuration[]
    autoscaling_groups?: rstring[]
    blue_green_deployment_config?: _data_aws_codedeploy_deployment_group__blue_green_deployment_config[]
    deployment_config_name?: rstring
    deployment_group_name: rstring
    deployment_style?: _data_aws_codedeploy_deployment_group__deployment_style[]
    ec2_tag_filter?: _data_aws_codedeploy_deployment_group__ec2_tag_filter[]
    ec2_tag_set?: _data_aws_codedeploy_deployment_group__ec2_tag_set[]
    ecs_service?: _data_aws_codedeploy_deployment_group__ecs_service[]
    load_balancer_info?: _data_aws_codedeploy_deployment_group__load_balancer_info[]
    on_premises_instance_tag_filter?: _data_aws_codedeploy_deployment_group__on_premises_instance_tag_filter[]
    service_role_arn: rstring
    trigger_configuration?: _data_aws_codedeploy_deployment_group__trigger_configuration[]
}

export class data_aws_codedeploy_deployment_group implements Data {
    config: data_aws_codedeploy_deployment_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_codedeploy_deployment_group"
    private _id: string;
    constructor(id: string, config: data_aws_codedeploy_deployment_group_config) {
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
    
    get ref_alarm_configuration(): Reference<_data_aws_codedeploy_deployment_group__alarm_configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.alarm_configuration`)
  }
    get ref_app_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.app_name`)
  }
    get ref_auto_rollback_configuration(): Reference<_data_aws_codedeploy_deployment_group__auto_rollback_configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.auto_rollback_configuration`)
  }
    get ref_autoscaling_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.autoscaling_groups`)
  }
    get ref_blue_green_deployment_config(): Reference<_data_aws_codedeploy_deployment_group__blue_green_deployment_config[]> {
        return new Reference(`data.${this._name}.${this._id}.blue_green_deployment_config`)
  }
    get ref_deployment_config_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.deployment_config_name`)
  }
    get ref_deployment_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.deployment_group_name`)
  }
    get ref_deployment_style(): Reference<_data_aws_codedeploy_deployment_group__deployment_style[]> {
        return new Reference(`data.${this._name}.${this._id}.deployment_style`)
  }
    get ref_ec2_tag_filter(): Reference<_data_aws_codedeploy_deployment_group__ec2_tag_filter[]> {
        return new Reference(`data.${this._name}.${this._id}.ec2_tag_filter`)
  }
    get ref_ec2_tag_set(): Reference<_data_aws_codedeploy_deployment_group__ec2_tag_set[]> {
        return new Reference(`data.${this._name}.${this._id}.ec2_tag_set`)
  }
    get ref_ecs_service(): Reference<_data_aws_codedeploy_deployment_group__ecs_service[]> {
        return new Reference(`data.${this._name}.${this._id}.ecs_service`)
  }
    get ref_load_balancer_info(): Reference<_data_aws_codedeploy_deployment_group__load_balancer_info[]> {
        return new Reference(`data.${this._name}.${this._id}.load_balancer_info`)
  }
    get ref_on_premises_instance_tag_filter(): Reference<_data_aws_codedeploy_deployment_group__on_premises_instance_tag_filter[]> {
        return new Reference(`data.${this._name}.${this._id}.on_premises_instance_tag_filter`)
  }
    get ref_service_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_role_arn`)
  }
    get ref_trigger_configuration(): Reference<_data_aws_codedeploy_deployment_group__trigger_configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.trigger_configuration`)
  }
}

