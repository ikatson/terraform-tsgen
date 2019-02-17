import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_ebs_volume__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_ebs_volume_config {
    arn?: rstring
    availability_zone?: rstring
    encrypted?: rboolean
    filter?: _data_aws_ebs_volume__filter[]
    iops?: rnumber
    kms_key_id?: rstring
    most_recent?: rboolean
    size?: rnumber
    snapshot_id?: rstring
    tags?: {[propName: string]: rstring}
    volume_id?: rstring
    volume_type?: rstring
}

export class data_aws_ebs_volume implements Data {
    config: data_aws_ebs_volume_config
    private _is_data: boolean = true
    private _name: string = "aws_ebs_volume"
    private _id: string;
    constructor(id: string, config: data_aws_ebs_volume_config) {
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
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_encrypted(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.encrypted`)
  }
    get ref_filter(): Reference<_data_aws_ebs_volume__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_iops(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.iops`)
  }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_most_recent(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.most_recent`)
  }
    get ref_size(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.size`)
  }
    get ref_snapshot_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_id`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_volume_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.volume_id`)
  }
    get ref_volume_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.volume_type`)
  }
}

