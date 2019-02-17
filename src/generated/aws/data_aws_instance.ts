import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_instance__credit_specification {
    cpu_credits?: rstring
}

export interface _data_aws_instance__ebs_block_device {
    delete_on_termination?: rboolean
    device_name?: rstring
    encrypted?: rboolean
    iops?: rnumber
    snapshot_id?: rstring
    volume_id?: rstring
    volume_size?: rnumber
    volume_type?: rstring
}

export interface _data_aws_instance__ephemeral_block_device {
    device_name: rstring
    no_device?: rboolean
    virtual_name?: rstring
}

export interface _data_aws_instance__filter {
    name: rstring
    values: rstring[]
}

export interface _data_aws_instance__root_block_device {
    delete_on_termination?: rboolean
    iops?: rnumber
    volume_id?: rstring
    volume_size?: rnumber
    volume_type?: rstring
}

export interface data_aws_instance_config {
    ami?: rstring
    arn?: rstring
    associate_public_ip_address?: rboolean
    availability_zone?: rstring
    credit_specification?: _data_aws_instance__credit_specification[]
    disable_api_termination?: rboolean
    ebs_block_device?: _data_aws_instance__ebs_block_device[]
    ebs_optimized?: rboolean
    ephemeral_block_device?: _data_aws_instance__ephemeral_block_device[]
    filter?: _data_aws_instance__filter[]
    get_password_data?: rboolean
    host_id?: rstring
    iam_instance_profile?: rstring
    instance_id?: rstring
    instance_state?: rstring
    instance_tags?: {[propName: string]: rstring}
    instance_type?: rstring
    key_name?: rstring
    monitoring?: rboolean
    network_interface_id?: rstring
    password_data?: rstring
    placement_group?: rstring
    private_dns?: rstring
    private_ip?: rstring
    public_dns?: rstring
    public_ip?: rstring
    root_block_device?: _data_aws_instance__root_block_device[]
    security_groups?: rstring[]
    source_dest_check?: rboolean
    subnet_id?: rstring
    tags?: {[propName: string]: rstring}
    tenancy?: rstring
    user_data?: rstring
    vpc_security_group_ids?: rstring[]
}

export class data_aws_instance implements Data {
    config: data_aws_instance_config
    private _is_data: boolean = true
    private _name: string = "aws_instance"
    private _id: string;
    constructor(id: string, config: data_aws_instance_config) {
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
    get ref_credit_specification(): Reference<_data_aws_instance__credit_specification[]> {
        return new Reference(`data.${this._name}.${this._id}.credit_specification`)
  }
    get ref_disable_api_termination(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.disable_api_termination`)
  }
    get ref_ebs_block_device(): Reference<_data_aws_instance__ebs_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.ebs_block_device`)
  }
    get ref_ebs_optimized(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.ebs_optimized`)
  }
    get ref_ephemeral_block_device(): Reference<_data_aws_instance__ephemeral_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.ephemeral_block_device`)
  }
    get ref_filter(): Reference<_data_aws_instance__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
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
    get ref_instance_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_id`)
  }
    get ref_instance_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_state`)
  }
    get ref_instance_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.instance_tags`)
  }
    get ref_instance_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_type`)
  }
    get ref_key_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_name`)
  }
    get ref_monitoring(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.monitoring`)
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
    get ref_root_block_device(): Reference<_data_aws_instance__root_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.root_block_device`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_source_dest_check(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.source_dest_check`)
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
    get ref_vpc_security_group_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_security_group_ids`)
  }
}

