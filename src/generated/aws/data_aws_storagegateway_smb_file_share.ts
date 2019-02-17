import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_storagegateway_smb_file_share_config {
    arn?: rstring
    authentication?: rstring
    default_storage_class?: rstring
    fileshare_id?: rstring
    gateway_arn: rstring
    guess_mime_type_enabled?: rboolean
    invalid_user_list?: rstring[]
    kms_encrypted?: rboolean
    kms_key_arn?: rstring
    location_arn: rstring
    object_acl?: rstring
    read_only?: rboolean
    requester_pays?: rboolean
    role_arn: rstring
    valid_user_list?: rstring[]
}

export class data_aws_storagegateway_smb_file_share implements Data {
    config: data_aws_storagegateway_smb_file_share_config
    private _is_data: boolean = true
    private _name: string = "data_aws_storagegateway_smb_file_share"
    private _id: string;
    constructor(id: string, config: data_aws_storagegateway_smb_file_share_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_authentication(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.authentication`)
  }
    get ref_default_storage_class(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_storage_class`)
  }
    get ref_fileshare_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.fileshare_id`)
  }
    get ref_gateway_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_arn`)
  }
    get ref_guess_mime_type_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.guess_mime_type_enabled`)
  }
    get ref_invalid_user_list(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.invalid_user_list`)
  }
    get ref_kms_encrypted(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.kms_encrypted`)
  }
    get ref_kms_key_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_arn`)
  }
    get ref_location_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.location_arn`)
  }
    get ref_object_acl(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.object_acl`)
  }
    get ref_read_only(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.read_only`)
  }
    get ref_requester_pays(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.requester_pays`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
    get ref_valid_user_list(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.valid_user_list`)
  }
}

