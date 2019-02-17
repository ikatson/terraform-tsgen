import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_ami__block_device_mappings {
    device_name?: rstring
    ebs?: {[propName: string]: rstring}
    no_device?: rstring
    virtual_name?: rstring
}

export interface _data_aws_ami__filter {
    name: rstring
    values: rstring[]
}

export interface _data_aws_ami__product_codes {
    product_code_id?: rstring
    product_code_type?: rstring
}

export interface data_aws_ami_config {
    architecture?: rstring
    block_device_mappings?: _data_aws_ami__block_device_mappings[]
    creation_date?: rstring
    description?: rstring
    executable_users?: rstring[]
    filter?: _data_aws_ami__filter[]
    hypervisor?: rstring
    image_id?: rstring
    image_location?: rstring
    image_owner_alias?: rstring
    image_type?: rstring
    kernel_id?: rstring
    most_recent?: rboolean
    name?: rstring
    name_regex?: rstring
    owner_id?: rstring
    owners?: rstring[]
    platform?: rstring
    product_codes?: _data_aws_ami__product_codes[]
    public?: rboolean
    ramdisk_id?: rstring
    root_device_name?: rstring
    root_device_type?: rstring
    root_snapshot_id?: rstring
    sriov_net_support?: rstring
    state?: rstring
    state_reason?: {[propName: string]: rstring}
    tags?: {[propName: string]: rstring}
    virtualization_type?: rstring
}

export class data_aws_ami implements Data {
    config: data_aws_ami_config
    private _is_data: boolean = true
    private _name: string = "aws_ami"
    private _id: string;
    constructor(id: string, config: data_aws_ami_config) {
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
        return new Reference(`data.${this._name}.${this._id}.architecture`)
  }
    get ref_block_device_mappings(): Reference<_data_aws_ami__block_device_mappings[]> {
        return new Reference(`data.${this._name}.${this._id}.block_device_mappings`)
  }
    get ref_creation_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.creation_date`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_executable_users(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.executable_users`)
  }
    get ref_filter(): Reference<_data_aws_ami__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_hypervisor(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.hypervisor`)
  }
    get ref_image_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.image_id`)
  }
    get ref_image_location(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.image_location`)
  }
    get ref_image_owner_alias(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.image_owner_alias`)
  }
    get ref_image_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.image_type`)
  }
    get ref_kernel_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kernel_id`)
  }
    get ref_most_recent(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.most_recent`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_regex(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_regex`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_owners(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.owners`)
  }
    get ref_platform(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.platform`)
  }
    get ref_product_codes(): Reference<_data_aws_ami__product_codes[]> {
        return new Reference(`data.${this._name}.${this._id}.product_codes`)
  }
    get ref_public(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.public`)
  }
    get ref_ramdisk_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ramdisk_id`)
  }
    get ref_root_device_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.root_device_name`)
  }
    get ref_root_device_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.root_device_type`)
  }
    get ref_root_snapshot_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.root_snapshot_id`)
  }
    get ref_sriov_net_support(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.sriov_net_support`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
  }
    get ref_state_reason(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.state_reason`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_virtualization_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.virtualization_type`)
  }
}

