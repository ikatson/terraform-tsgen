import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ebs_snapshot_copy_config {
    data_encryption_key_id?: rstring
    description?: rstring
    encrypted?: rboolean
    kms_key_id?: rstring
    owner_alias?: rstring
    owner_id?: rstring
    source_region: rstring
    source_snapshot_id: rstring
    tags?: {[propName: string]: rstring}
    volume_id?: rstring
    volume_size?: rnumber
}

export class data_aws_ebs_snapshot_copy implements Data {
    config: data_aws_ebs_snapshot_copy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ebs_snapshot_copy"
    private _id: string;
    constructor(id: string, config: data_aws_ebs_snapshot_copy_config) {
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
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_owner_alias(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_alias`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_source_region(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_region`)
  }
    get ref_source_snapshot_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_snapshot_id`)
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

