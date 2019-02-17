import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_efs_mount_target_config {
    dns_name?: rstring
    file_system_arn?: rstring
    file_system_id?: rstring
    ip_address?: rstring
    mount_target_id: rstring
    network_interface_id?: rstring
    security_groups?: rstring[]
    subnet_id?: rstring
}

export class data_aws_efs_mount_target implements Data {
    config: data_aws_efs_mount_target_config
    private _is_data: boolean = true
    private _name: string = "aws_efs_mount_target"
    private _id: string;
    constructor(id: string, config: data_aws_efs_mount_target_config) {
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
    
    get ref_dns_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.dns_name`)
  }
    get ref_file_system_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.file_system_arn`)
  }
    get ref_file_system_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.file_system_id`)
  }
    get ref_ip_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ip_address`)
  }
    get ref_mount_target_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.mount_target_id`)
  }
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_id`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subnet_id`)
  }
}

