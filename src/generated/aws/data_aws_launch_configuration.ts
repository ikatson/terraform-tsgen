import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_launch_configuration__ebs_block_device {
    delete_on_termination?: rboolean
    device_name?: rstring
    encrypted?: rboolean
    iops?: rnumber
    snapshot_id?: rstring
    volume_size?: rnumber
    volume_type?: rstring
}

export interface _data_aws_launch_configuration__ephemeral_block_device {
    device_name?: rstring
    virtual_name?: rstring
}

export interface _data_aws_launch_configuration__root_block_device {
    delete_on_termination?: rboolean
    iops?: rnumber
    volume_size?: rnumber
    volume_type?: rstring
}

export interface data_aws_launch_configuration_config {
    associate_public_ip_address?: rboolean
    ebs_block_device?: _data_aws_launch_configuration__ebs_block_device[]
    ebs_optimized?: rboolean
    enable_monitoring?: rboolean
    ephemeral_block_device?: _data_aws_launch_configuration__ephemeral_block_device[]
    iam_instance_profile?: rstring
    image_id?: rstring
    instance_type?: rstring
    key_name?: rstring
    name: rstring
    placement_tenancy?: rstring
    root_block_device?: _data_aws_launch_configuration__root_block_device[]
    security_groups?: rstring[]
    spot_price?: rstring
    user_data?: rstring
    vpc_classic_link_id?: rstring
    vpc_classic_link_security_groups?: rstring[]
}

export class data_aws_launch_configuration implements Data {
    config: data_aws_launch_configuration_config
    private _is_data: boolean = true
    private _name: string = "aws_launch_configuration"
    private _id: string;
    constructor(id: string, config: data_aws_launch_configuration_config) {
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
    
    get ref_associate_public_ip_address(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.associate_public_ip_address`)
  }
    get ref_ebs_block_device(): Reference<_data_aws_launch_configuration__ebs_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.ebs_block_device`)
  }
    get ref_ebs_optimized(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.ebs_optimized`)
  }
    get ref_enable_monitoring(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enable_monitoring`)
  }
    get ref_ephemeral_block_device(): Reference<_data_aws_launch_configuration__ephemeral_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.ephemeral_block_device`)
  }
    get ref_iam_instance_profile(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.iam_instance_profile`)
  }
    get ref_image_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.image_id`)
  }
    get ref_instance_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_type`)
  }
    get ref_key_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_name`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_placement_tenancy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.placement_tenancy`)
  }
    get ref_root_block_device(): Reference<_data_aws_launch_configuration__root_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.root_block_device`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_spot_price(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.spot_price`)
  }
    get ref_user_data(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_data`)
  }
    get ref_vpc_classic_link_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_classic_link_id`)
  }
    get ref_vpc_classic_link_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_classic_link_security_groups`)
  }
}

