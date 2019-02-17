import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_storagegateway_gateway__smb_active_directory_settings {
    domain_name: rstring
    password: rstring
    username: rstring
}

export interface data_aws_storagegateway_gateway_config {
    activation_key?: rstring
    arn?: rstring
    gateway_id?: rstring
    gateway_ip_address?: rstring
    gateway_name: rstring
    gateway_timezone: rstring
    gateway_type?: rstring
    medium_changer_type?: rstring
    smb_active_directory_settings?: _data_aws_storagegateway_gateway__smb_active_directory_settings[]
    smb_guest_password?: rstring
    tape_drive_type?: rstring
}

export class data_aws_storagegateway_gateway implements Data {
    config: data_aws_storagegateway_gateway_config
    private _is_data: boolean = true
    private _name: string = "data_aws_storagegateway_gateway"
    private _id: string;
    constructor(id: string, config: data_aws_storagegateway_gateway_config) {
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
    
    get ref_activation_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.activation_key`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_id`)
  }
    get ref_gateway_ip_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_ip_address`)
  }
    get ref_gateway_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_name`)
  }
    get ref_gateway_timezone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_timezone`)
  }
    get ref_gateway_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_type`)
  }
    get ref_medium_changer_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.medium_changer_type`)
  }
    get ref_smb_active_directory_settings(): Reference<_data_aws_storagegateway_gateway__smb_active_directory_settings[]> {
        return new Reference(`data.${this._name}.${this._id}.smb_active_directory_settings`)
  }
    get ref_smb_guest_password(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.smb_guest_password`)
  }
    get ref_tape_drive_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.tape_drive_type`)
  }
}

