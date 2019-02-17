import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ami_copy__ebs_block_device {
    delete_on_termination?: rboolean
    device_name?: rstring
    encrypted?: rboolean
    iops?: rnumber
    snapshot_id?: rstring
    volume_size?: rnumber
    volume_type?: rstring
}

export interface _aws_ami_copy__ephemeral_block_device {
    device_name?: rstring
    virtual_name?: rstring
}

export interface aws_ami_copy_config {
    architecture?: rstring
    description?: rstring
    ebs_block_device?: _aws_ami_copy__ebs_block_device[]
    ena_support?: rboolean
    encrypted?: rboolean
    ephemeral_block_device?: _aws_ami_copy__ephemeral_block_device[]
    image_location?: rstring
    kernel_id?: rstring
    kms_key_id?: rstring
    manage_ebs_snapshots?: rboolean
    name: rstring
    ramdisk_id?: rstring
    root_device_name?: rstring
    root_snapshot_id?: rstring
    source_ami_id: rstring
    source_ami_region: rstring
    sriov_net_support?: rstring
    tags?: {[propName: string]: rstring}
    virtualization_type?: rstring
}

export class aws_ami_copy implements Resource {
    config: aws_ami_copy_config
    private _is_data: boolean = false
    private _name: string = "aws_ami_copy"
    private _id: string;
    constructor(id: string, config: aws_ami_copy_config) {
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
    
    get ref_architecture(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.architecture`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_ebs_block_device(): Reference<_aws_ami_copy__ebs_block_device[]> {
        return new Reference(`${this._name}.${this._id}.ebs_block_device`)
    }
    get ref_ena_support(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.ena_support`)
    }
    get ref_encrypted(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.encrypted`)
    }
    get ref_ephemeral_block_device(): Reference<_aws_ami_copy__ephemeral_block_device[]> {
        return new Reference(`${this._name}.${this._id}.ephemeral_block_device`)
    }
    get ref_image_location(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.image_location`)
    }
    get ref_kernel_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kernel_id`)
    }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_manage_ebs_snapshots(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.manage_ebs_snapshots`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_ramdisk_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ramdisk_id`)
    }
    get ref_root_device_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.root_device_name`)
    }
    get ref_root_snapshot_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.root_snapshot_id`)
    }
    get ref_source_ami_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_ami_id`)
    }
    get ref_source_ami_region(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_ami_region`)
    }
    get ref_sriov_net_support(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sriov_net_support`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_virtualization_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.virtualization_type`)
    }
}

