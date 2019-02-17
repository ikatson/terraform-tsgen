import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_launch_template__block_device_mappings__ebs {
    delete_on_termination?: rstring
    encrypted?: rstring
    iops?: rnumber
    kms_key_id?: rstring
    snapshot_id?: rstring
    volume_size?: rnumber
    volume_type?: rstring
}

export interface _aws_launch_template__block_device_mappings {
    device_name?: rstring
    ebs?: __aws_launch_template__block_device_mappings__ebs[]
    no_device?: rstring
    virtual_name?: rstring
}

export interface __aws_launch_template__capacity_reservation_specification__capacity_reservation_target {
    capacity_reservation_id?: rstring
}

export interface _aws_launch_template__capacity_reservation_specification {
    capacity_reservation_preference?: rstring
    capacity_reservation_target?: __aws_launch_template__capacity_reservation_specification__capacity_reservation_target[]
}

export interface _aws_launch_template__credit_specification {
    cpu_credits?: rstring
}

export interface _aws_launch_template__elastic_gpu_specifications {
    type: rstring
}

export interface _aws_launch_template__iam_instance_profile {
    arn?: rstring
    name?: rstring
}

export interface __aws_launch_template__instance_market_options__spot_options {
    block_duration_minutes?: rnumber
    instance_interruption_behavior?: rstring
    max_price?: rstring
    spot_instance_type?: rstring
    valid_until?: rstring
}

export interface _aws_launch_template__instance_market_options {
    market_type?: rstring
    spot_options?: __aws_launch_template__instance_market_options__spot_options[]
}

export interface _aws_launch_template__license_specification {
    license_configuration_arn: rstring
}

export interface _aws_launch_template__monitoring {
    enabled?: rboolean
}

export interface _aws_launch_template__network_interfaces {
    associate_public_ip_address?: rboolean
    delete_on_termination?: rboolean
    description?: rstring
    device_index?: rnumber
    ipv4_address_count?: rnumber
    ipv4_addresses?: rstring[]
    ipv6_address_count?: rnumber
    ipv6_addresses?: rstring[]
    network_interface_id?: rstring
    private_ip_address?: rstring
    security_groups?: rstring[]
    subnet_id?: rstring
}

export interface _aws_launch_template__placement {
    affinity?: rstring
    availability_zone?: rstring
    group_name?: rstring
    host_id?: rstring
    spread_domain?: rstring
    tenancy?: rstring
}

export interface _aws_launch_template__tag_specifications {
    resource_type?: rstring
    tags?: {[propName: string]: rstring}
}

export interface aws_launch_template_config {
    arn?: rstring
    block_device_mappings?: _aws_launch_template__block_device_mappings[]
    capacity_reservation_specification?: _aws_launch_template__capacity_reservation_specification[]
    credit_specification?: _aws_launch_template__credit_specification[]
    default_version?: rnumber
    description?: rstring
    disable_api_termination?: rboolean
    ebs_optimized?: rstring
    elastic_gpu_specifications?: _aws_launch_template__elastic_gpu_specifications[]
    iam_instance_profile?: _aws_launch_template__iam_instance_profile[]
    image_id?: rstring
    instance_initiated_shutdown_behavior?: rstring
    instance_market_options?: _aws_launch_template__instance_market_options[]
    instance_type?: rstring
    kernel_id?: rstring
    key_name?: rstring
    latest_version?: rnumber
    license_specification?: _aws_launch_template__license_specification[]
    monitoring?: _aws_launch_template__monitoring[]
    name?: rstring
    name_prefix?: rstring
    network_interfaces?: _aws_launch_template__network_interfaces[]
    placement?: _aws_launch_template__placement[]
    ram_disk_id?: rstring
    security_group_names?: rstring[]
    tag_specifications?: _aws_launch_template__tag_specifications[]
    tags?: {[propName: string]: rstring}
    user_data?: rstring
    vpc_security_group_ids?: rstring[]
}

export class aws_launch_template implements Resource {
    config: aws_launch_template_config
    private _is_data: boolean = false
    private _name: string = "aws_launch_template"
    private _id: string;
    constructor(id: string, config: aws_launch_template_config) {
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
    get ref_block_device_mappings(): Reference<_aws_launch_template__block_device_mappings[]> {
        return new Reference(`${this._name}.${this._id}.block_device_mappings`)
    }
    get ref_capacity_reservation_specification(): Reference<_aws_launch_template__capacity_reservation_specification[]> {
        return new Reference(`${this._name}.${this._id}.capacity_reservation_specification`)
    }
    get ref_credit_specification(): Reference<_aws_launch_template__credit_specification[]> {
        return new Reference(`${this._name}.${this._id}.credit_specification`)
    }
    get ref_default_version(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.default_version`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_disable_api_termination(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.disable_api_termination`)
    }
    get ref_ebs_optimized(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ebs_optimized`)
    }
    get ref_elastic_gpu_specifications(): Reference<_aws_launch_template__elastic_gpu_specifications[]> {
        return new Reference(`${this._name}.${this._id}.elastic_gpu_specifications`)
    }
    get ref_iam_instance_profile(): Reference<_aws_launch_template__iam_instance_profile[]> {
        return new Reference(`${this._name}.${this._id}.iam_instance_profile`)
    }
    get ref_image_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.image_id`)
    }
    get ref_instance_initiated_shutdown_behavior(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_initiated_shutdown_behavior`)
    }
    get ref_instance_market_options(): Reference<_aws_launch_template__instance_market_options[]> {
        return new Reference(`${this._name}.${this._id}.instance_market_options`)
    }
    get ref_instance_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_type`)
    }
    get ref_kernel_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kernel_id`)
    }
    get ref_key_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_name`)
    }
    get ref_latest_version(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.latest_version`)
    }
    get ref_license_specification(): Reference<_aws_launch_template__license_specification[]> {
        return new Reference(`${this._name}.${this._id}.license_specification`)
    }
    get ref_monitoring(): Reference<_aws_launch_template__monitoring[]> {
        return new Reference(`${this._name}.${this._id}.monitoring`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_network_interfaces(): Reference<_aws_launch_template__network_interfaces[]> {
        return new Reference(`${this._name}.${this._id}.network_interfaces`)
    }
    get ref_placement(): Reference<_aws_launch_template__placement[]> {
        return new Reference(`${this._name}.${this._id}.placement`)
    }
    get ref_ram_disk_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ram_disk_id`)
    }
    get ref_security_group_names(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.security_group_names`)
    }
    get ref_tag_specifications(): Reference<_aws_launch_template__tag_specifications[]> {
        return new Reference(`${this._name}.${this._id}.tag_specifications`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_user_data(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.user_data`)
    }
    get ref_vpc_security_group_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.vpc_security_group_ids`)
    }
}

