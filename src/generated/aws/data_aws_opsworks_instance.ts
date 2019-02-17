import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_opsworks_instance__ebs_block_device {
    delete_on_termination?: rboolean
    device_name: rstring
    iops?: rnumber
    snapshot_id?: rstring
    volume_size?: rnumber
    volume_type?: rstring
}

export interface _data_aws_opsworks_instance__ephemeral_block_device {
    device_name: rstring
    virtual_name: rstring
}

export interface _data_aws_opsworks_instance__root_block_device {
    delete_on_termination?: rboolean
    iops?: rnumber
    volume_size?: rnumber
    volume_type?: rstring
}

export interface data_aws_opsworks_instance_config {
    agent_version?: rstring
    ami_id?: rstring
    architecture?: rstring
    auto_scaling_type?: rstring
    availability_zone?: rstring
    created_at?: rstring
    delete_ebs?: rboolean
    delete_eip?: rboolean
    ebs_block_device?: _data_aws_opsworks_instance__ebs_block_device[]
    ebs_optimized?: rboolean
    ec2_instance_id?: rstring
    ecs_cluster_arn?: rstring
    elastic_ip?: rstring
    ephemeral_block_device?: _data_aws_opsworks_instance__ephemeral_block_device[]
    hostname?: rstring
    infrastructure_class?: rstring
    install_updates_on_boot?: rboolean
    instance_profile_arn?: rstring
    instance_type?: rstring
    last_service_error_id?: rstring
    layer_ids: rstring[]
    os?: rstring
    platform?: rstring
    private_dns?: rstring
    private_ip?: rstring
    public_dns?: rstring
    public_ip?: rstring
    registered_by?: rstring
    reported_agent_version?: rstring
    reported_os_family?: rstring
    reported_os_name?: rstring
    reported_os_version?: rstring
    root_block_device?: _data_aws_opsworks_instance__root_block_device[]
    root_device_type?: rstring
    root_device_volume_id?: rstring
    security_group_ids?: rstring[]
    ssh_host_dsa_key_fingerprint?: rstring
    ssh_host_rsa_key_fingerprint?: rstring
    ssh_key_name?: rstring
    stack_id: rstring
    state?: rstring
    status?: rstring
    subnet_id?: rstring
    tenancy?: rstring
    virtualization_type?: rstring
}

export class data_aws_opsworks_instance implements Data {
    config: data_aws_opsworks_instance_config
    private _is_data: boolean = true
    private _name: string = "data_aws_opsworks_instance"
    private _id: string;
    constructor(id: string, config: data_aws_opsworks_instance_config) {
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
    
    get ref_agent_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.agent_version`)
  }
    get ref_ami_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ami_id`)
  }
    get ref_architecture(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.architecture`)
  }
    get ref_auto_scaling_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.auto_scaling_type`)
  }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_created_at(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.created_at`)
  }
    get ref_delete_ebs(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.delete_ebs`)
  }
    get ref_delete_eip(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.delete_eip`)
  }
    get ref_ebs_block_device(): Reference<_data_aws_opsworks_instance__ebs_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.ebs_block_device`)
  }
    get ref_ebs_optimized(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.ebs_optimized`)
  }
    get ref_ec2_instance_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ec2_instance_id`)
  }
    get ref_ecs_cluster_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ecs_cluster_arn`)
  }
    get ref_elastic_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.elastic_ip`)
  }
    get ref_ephemeral_block_device(): Reference<_data_aws_opsworks_instance__ephemeral_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.ephemeral_block_device`)
  }
    get ref_hostname(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.hostname`)
  }
    get ref_infrastructure_class(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.infrastructure_class`)
  }
    get ref_install_updates_on_boot(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.install_updates_on_boot`)
  }
    get ref_instance_profile_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_profile_arn`)
  }
    get ref_instance_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_type`)
  }
    get ref_last_service_error_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.last_service_error_id`)
  }
    get ref_layer_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.layer_ids`)
  }
    get ref_os(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.os`)
  }
    get ref_platform(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.platform`)
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
    get ref_registered_by(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.registered_by`)
  }
    get ref_reported_agent_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.reported_agent_version`)
  }
    get ref_reported_os_family(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.reported_os_family`)
  }
    get ref_reported_os_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.reported_os_name`)
  }
    get ref_reported_os_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.reported_os_version`)
  }
    get ref_root_block_device(): Reference<_data_aws_opsworks_instance__root_block_device[]> {
        return new Reference(`data.${this._name}.${this._id}.root_block_device`)
  }
    get ref_root_device_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.root_device_type`)
  }
    get ref_root_device_volume_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.root_device_volume_id`)
  }
    get ref_security_group_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_group_ids`)
  }
    get ref_ssh_host_dsa_key_fingerprint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ssh_host_dsa_key_fingerprint`)
  }
    get ref_ssh_host_rsa_key_fingerprint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ssh_host_rsa_key_fingerprint`)
  }
    get ref_ssh_key_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ssh_key_name`)
  }
    get ref_stack_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.stack_id`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subnet_id`)
  }
    get ref_tenancy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.tenancy`)
  }
    get ref_virtualization_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.virtualization_type`)
  }
}

