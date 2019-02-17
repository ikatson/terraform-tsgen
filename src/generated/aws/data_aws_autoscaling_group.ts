import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_autoscaling_group_config {
    arn?: rstring
    availability_zones?: rstring[]
    default_cooldown?: rnumber
    desired_capacity?: rnumber
    health_check_grace_period?: rnumber
    health_check_type?: rstring
    launch_configuration?: rstring
    load_balancers?: rstring[]
    max_size?: rnumber
    min_size?: rnumber
    name: rstring
    new_instances_protected_from_scale_in?: rboolean
    placement_group?: rstring
    service_linked_role_arn?: rstring
    status?: rstring
    target_group_arns?: rstring[]
    termination_policies?: rstring[]
    vpc_zone_identifier?: rstring
}

export class data_aws_autoscaling_group implements Data {
    config: data_aws_autoscaling_group_config
    private _is_data: boolean = true
    private _name: string = "aws_autoscaling_group"
    private _id: string;
    constructor(id: string, config: data_aws_autoscaling_group_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.availability_zones`)
  }
    get ref_default_cooldown(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.default_cooldown`)
  }
    get ref_desired_capacity(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.desired_capacity`)
  }
    get ref_health_check_grace_period(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.health_check_grace_period`)
  }
    get ref_health_check_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.health_check_type`)
  }
    get ref_launch_configuration(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.launch_configuration`)
  }
    get ref_load_balancers(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.load_balancers`)
  }
    get ref_max_size(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.max_size`)
  }
    get ref_min_size(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.min_size`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_new_instances_protected_from_scale_in(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.new_instances_protected_from_scale_in`)
  }
    get ref_placement_group(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.placement_group`)
  }
    get ref_service_linked_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_linked_role_arn`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_target_group_arns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.target_group_arns`)
  }
    get ref_termination_policies(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.termination_policies`)
  }
    get ref_vpc_zone_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_zone_identifier`)
  }
}

