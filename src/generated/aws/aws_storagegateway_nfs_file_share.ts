import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_storagegateway_nfs_file_share__nfs_file_share_defaults {
    directory_mode?: rstring
    file_mode?: rstring
    group_id?: rnumber
    owner_id?: rnumber
}

export interface aws_storagegateway_nfs_file_share_config {
    arn?: rstring
    client_list: rstring[]
    default_storage_class?: rstring
    fileshare_id?: rstring
    gateway_arn: rstring
    guess_mime_type_enabled?: rboolean
    kms_encrypted?: rboolean
    kms_key_arn?: rstring
    location_arn: rstring
    nfs_file_share_defaults?: _aws_storagegateway_nfs_file_share__nfs_file_share_defaults[]
    object_acl?: rstring
    read_only?: rboolean
    requester_pays?: rboolean
    role_arn: rstring
    squash?: rstring
}

export class aws_storagegateway_nfs_file_share implements Resource {
    config: aws_storagegateway_nfs_file_share_config
    private _is_data: boolean = false
    private _name: string = "aws_storagegateway_nfs_file_share"
    private _id: string;
    constructor(id: string, config: aws_storagegateway_nfs_file_share_config) {
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
    get ref_client_list(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.client_list`)
    }
    get ref_default_storage_class(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_storage_class`)
    }
    get ref_fileshare_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.fileshare_id`)
    }
    get ref_gateway_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.gateway_arn`)
    }
    get ref_guess_mime_type_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.guess_mime_type_enabled`)
    }
    get ref_kms_encrypted(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.kms_encrypted`)
    }
    get ref_kms_key_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_arn`)
    }
    get ref_location_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.location_arn`)
    }
    get ref_nfs_file_share_defaults(): Reference<_aws_storagegateway_nfs_file_share__nfs_file_share_defaults[]> {
        return new Reference(`${this._name}.${this._id}.nfs_file_share_defaults`)
    }
    get ref_object_acl(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.object_acl`)
    }
    get ref_read_only(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.read_only`)
    }
    get ref_requester_pays(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.requester_pays`)
    }
    get ref_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_arn`)
    }
    get ref_squash(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.squash`)
    }
}

