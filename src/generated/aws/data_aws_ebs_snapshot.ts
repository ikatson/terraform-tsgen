import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_ebs_snapshot__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_ebs_snapshot_config {
    data_encryption_key_id?: rstring
    description?: rstring
    encrypted?: rboolean
    filter?: _data_aws_ebs_snapshot__filter[]
    kms_key_id?: rstring
    most_recent?: rboolean
    owner_alias?: rstring
    owner_id?: rstring
    owners?: rstring[]
    restorable_by_user_ids?: rstring[]
    snapshot_id?: rstring
    snapshot_ids?: rstring[]
    state?: rstring
    tags?: {[propName: string]: rstring}
    volume_id?: rstring
    volume_size?: rnumber
}

export class data_aws_ebs_snapshot implements Data {
    config: data_aws_ebs_snapshot_config
    private _is_data: boolean = true
    private _name: string = "aws_ebs_snapshot"
    private _id: string;
    constructor(id: string, config: data_aws_ebs_snapshot_config) {
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
    
    get ref_data_encryption_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.data_encryption_key_id`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_encrypted(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.encrypted`)
  }
    get ref_filter(): Reference<_data_aws_ebs_snapshot__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_most_recent(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.most_recent`)
  }
    get ref_owner_alias(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_alias`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_owners(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.owners`)
  }
    get ref_restorable_by_user_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.restorable_by_user_ids`)
  }
    get ref_snapshot_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_id`)
  }
    get ref_snapshot_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_ids`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_volume_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.volume_id`)
  }
    get ref_volume_size(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.volume_size`)
  }
}

