import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_spot_instance_request__credit_specification {
    cpu_credits?: rstring
}

export interface _data_aws_spot_instance_request__ebs_block_device {
    delete_on_termination?: rboolean
    device_name: rstring
    encrypted?: rboolean
    iops?: rnumber
    snapshot_id?: rstring
    volume_id?: rstring
    volume_size?: rnumber
    volume_type?: rstring
}

export interface _data_aws_spot_instance_request__ephemeral_block_device {
    device_name: rstring
    no_device?: rboolean
    virtual_name?: rstring
}

export interface _data_aws_spot_instance_request__network_interface {
    delete_on_termination?: rboolean
    device_index: rnumber
    network_interface_id: rstring
}

export interface _data_aws_spot_instance_request__root_block_device {
    delete_on_termination?: rboolean
    iops?: rnumber
    volume_id?: rstring
    volume_size?: rnumber
    volume_type?: rstring
}

export interface data_aws_spot_instance_request_config {
    ami: rstring
    arn?: rstring
    associate_public_ip_address?: rboolean
    availability_zone?: rstring
    block_device?: {[propName: string]: rstring}
    block_duration_minutes?: rnumber
    cpu_core_count?: rnumber
    cpu_threads_per_core?: rnumber
    credit_specification?: _data_aws_spot_instance_request__credit_specification[]
    disable_api_termination?: rboolean
    ebs_block_device?: _data_aws_spot_instance_request__ebs_block_device[]
    ebs_optimized?: rboolean
    ephemeral_block_device?: _data_aws_spot_instance_request__ephemeral_block_device[]
    get_password_data?: rboolean
    host_id?: rstring
    iam_instance_profile?: rstring
    instance_initiated_shutdown_behavior?: rstring
    instance_interruption_behaviour?: rstring
    instance_state?: rstring
    instance_type: rstring
    ipv6_address_count?: rnumber
    ipv6_addresses?: rstring[]
    key_name?: rstring
    launch_group?: rstring
    monitoring?: rboolean
    network_interface?: _data_aws_spot_instance_request__network_interface[]
    network_interface_id?: rstring
    password_data?: rstring
    placement_group?: rstring
    primary_network_interface_id?: rstring
    private_dns?: rstring
    private_ip?: rstring
    public_dns?: rstring
    public_ip?: rstring
    root_block_device?: _data_aws_spot_instance_request__root_block_device[]
    security_groups?: rstring[]
    source_dest_check?: rboolean
    spot_bid_status?: rstring
    spot_instance_id?: rstring
    spot_price?: rstring
    spot_request_state?: rstring
    spot_type?: rstring
    subnet_id?: rstring
    tags?: {[propName: string]: rstring}
    tenancy?: rstring
    user_data?: rstring
    user_data_base64?: rstring
    valid_from?: rstring
    valid_until?: rstring
    volume_tags?: {[propName: string]: rstring}
    vpc_security_group_ids?: rstring[]
    wait_for_fulfillment?: rboolean
}

export class data_aws_spot_instance_request implements Data {
    config: data_aws_spot_instance_request_config
    private _is_data: boolean = true
    private _name: string = "data_aws_spot_instance_request"
    private _id: string;
    constructor(id: string, config: data_aws_spot_instance_request_config) {
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
    
    get ref_ami(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ami`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_associate_public_ip_address(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.associate_public_ip_address`)
  }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_block_device(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.block_device`)
  }
    get ref_block_duration_minutes(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.block_duration_minutes`)
  }
    get ref_cpu_core_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.cpu_core_count`)
  }
    get ref_cpu_threads_per_core(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.cpu_threads_per_core`)
  }
    get ref_credit_specification(): Reference<_data_aws_spot_instance_request__credit_specification[]> {
        return new Reference(`data.${this._name}.${this._id}.credit_specification`)
  }
    get ref_disable_api_termination(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.disable_api_termination`)
  }
    get ref_ebs_block_device(): Reference<_data_aws_spot_instance_request__ebs_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.ebs_block_device`)
  }
    get ref_ebs_optimized(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.ebs_optimized`)
  }
    get ref_ephemeral_block_device(): Reference<_data_aws_spot_instance_request__ephemeral_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.ephemeral_block_device`)
  }
    get ref_get_password_data(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.get_password_data`)
  }
    get ref_host_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.host_id`)
  }
    get ref_iam_instance_profile(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.iam_instance_profile`)
  }
    get ref_instance_initiated_shutdown_behavior(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_initiated_shutdown_behavior`)
  }
    get ref_instance_interruption_behaviour(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_interruption_behaviour`)
  }
    get ref_instance_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_state`)
  }
    get ref_instance_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_type`)
  }
    get ref_ipv6_address_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.ipv6_address_count`)
  }
    get ref_ipv6_addresses(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ipv6_addresses`)
  }
    get ref_key_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_name`)
  }
    get ref_launch_group(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.launch_group`)
  }
    get ref_monitoring(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.monitoring`)
  }
    get ref_network_interface(): Reference<_data_aws_spot_instance_request__network_interface[]> {
        return new Reference(`data.${this._name}.${this._id}.network_interface`)
  }
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_id`)
  }
    get ref_password_data(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.password_data`)
  }
    get ref_placement_group(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.placement_group`)
  }
    get ref_primary_network_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.primary_network_interface_id`)
  }
    get ref_private_dns(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_dns`)
  }
    get ref_private_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_ip`)
  }
    get ref_public_dns(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.public_dns`)
  }
    get ref_public_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.public_ip`)
  }
    get ref_root_block_device(): Reference<_data_aws_spot_instance_request__root_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.root_block_device`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_source_dest_check(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.source_dest_check`)
  }
    get ref_spot_bid_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.spot_bid_status`)
  }
    get ref_spot_instance_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.spot_instance_id`)
  }
    get ref_spot_price(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.spot_price`)
  }
    get ref_spot_request_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.spot_request_state`)
  }
    get ref_spot_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.spot_type`)
  }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subnet_id`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_tenancy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.tenancy`)
  }
    get ref_user_data(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_data`)
  }
    get ref_user_data_base64(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_data_base64`)
  }
    get ref_valid_from(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.valid_from`)
  }
    get ref_valid_until(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.valid_until`)
  }
    get ref_volume_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.volume_tags`)
  }
    get ref_vpc_security_group_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_security_group_ids`)
  }
    get ref_wait_for_fulfillment(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.wait_for_fulfillment`)
  }
}

