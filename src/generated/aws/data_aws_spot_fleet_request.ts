import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_spot_fleet_request__launch_specification__ebs_block_device {
    delete_on_termination?: rboolean
    device_name: rstring
    encrypted?: rboolean
    iops?: rnumber
    snapshot_id?: rstring
    volume_size?: rnumber
    volume_type?: rstring
}

export interface __data_aws_spot_fleet_request__launch_specification__ephemeral_block_device {
    device_name: rstring
    virtual_name: rstring
}

export interface __data_aws_spot_fleet_request__launch_specification__root_block_device {
    delete_on_termination?: rboolean
    iops?: rnumber
    volume_size?: rnumber
    volume_type?: rstring
}

export interface _data_aws_spot_fleet_request__launch_specification {
    ami: rstring
    associate_public_ip_address?: rboolean
    availability_zone?: rstring
    ebs_block_device?: __data_aws_spot_fleet_request__launch_specification__ebs_block_device[]
    ebs_optimized?: rboolean
    ephemeral_block_device?: __data_aws_spot_fleet_request__launch_specification__ephemeral_block_device[]
    iam_instance_profile?: rstring
    iam_instance_profile_arn?: rstring
    instance_type: rstring
    key_name?: rstring
    monitoring?: rboolean
    placement_group?: rstring
    placement_tenancy?: rstring
    root_block_device?: __data_aws_spot_fleet_request__launch_specification__root_block_device[]
    spot_price?: rstring
    subnet_id?: rstring
    tags?: {[propName: string]: rstring}
    user_data?: rstring
    vpc_security_group_ids?: rstring[]
    weighted_capacity?: rstring
}

export interface data_aws_spot_fleet_request_config {
    allocation_strategy?: rstring
    client_token?: rstring
    excess_capacity_termination_policy?: rstring
    fleet_type?: rstring
    iam_fleet_role: rstring
    instance_interruption_behaviour?: rstring
    instance_pools_to_use_count?: rnumber
    launch_specification: _data_aws_spot_fleet_request__launch_specification[]
    load_balancers?: rstring[]
    replace_unhealthy_instances?: rboolean
    spot_price?: rstring
    spot_request_state?: rstring
    target_capacity: rnumber
    target_group_arns?: rstring[]
    terminate_instances_with_expiration?: rboolean
    valid_from?: rstring
    valid_until?: rstring
    wait_for_fulfillment?: rboolean
}

export class data_aws_spot_fleet_request implements Data {
    config: data_aws_spot_fleet_request_config
    private _is_data: boolean = true
    private _name: string = "data_aws_spot_fleet_request"
    private _id: string;
    constructor(id: string, config: data_aws_spot_fleet_request_config) {
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
    
    get ref_allocation_strategy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.allocation_strategy`)
  }
    get ref_client_token(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.client_token`)
  }
    get ref_excess_capacity_termination_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.excess_capacity_termination_policy`)
  }
    get ref_fleet_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.fleet_type`)
  }
    get ref_iam_fleet_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.iam_fleet_role`)
  }
    get ref_instance_interruption_behaviour(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_interruption_behaviour`)
  }
    get ref_instance_pools_to_use_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.instance_pools_to_use_count`)
  }
    get ref_launch_specification(): Reference<_data_aws_spot_fleet_request__launch_specification[]> {
        return new Reference(`data.${this._name}.${this._id}.launch_specification`)
  }
    get ref_load_balancers(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.load_balancers`)
  }
    get ref_replace_unhealthy_instances(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.replace_unhealthy_instances`)
  }
    get ref_spot_price(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.spot_price`)
  }
    get ref_spot_request_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.spot_request_state`)
  }
    get ref_target_capacity(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.target_capacity`)
  }
    get ref_target_group_arns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.target_group_arns`)
  }
    get ref_terminate_instances_with_expiration(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.terminate_instances_with_expiration`)
  }
    get ref_valid_from(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.valid_from`)
  }
    get ref_valid_until(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.valid_until`)
  }
    get ref_wait_for_fulfillment(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.wait_for_fulfillment`)
  }
}

