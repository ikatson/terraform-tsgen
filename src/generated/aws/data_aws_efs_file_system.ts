import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_efs_file_system_config {
    arn?: rstring
    creation_token?: rstring
    dns_name?: rstring
    encrypted?: rboolean
    file_system_id?: rstring
    kms_key_id?: rstring
    performance_mode?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_efs_file_system implements Data {
    config: data_aws_efs_file_system_config
    private _is_data: boolean = true
    private _name: string = "aws_efs_file_system"
    private _id: string;
    constructor(id: string, config: data_aws_efs_file_system_config) {
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
    get ref_creation_token(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.creation_token`)
  }
    get ref_dns_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.dns_name`)
  }
    get ref_encrypted(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.encrypted`)
  }
    get ref_file_system_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.file_system_id`)
  }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_performance_mode(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.performance_mode`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

