import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ebs_volume_config {
    arn?: rstring
    availability_zone: rstring
    encrypted?: rboolean
    iops?: rnumber
    kms_key_id?: rstring
    size?: rnumber
    snapshot_id?: rstring
    tags?: {[propName: string]: rstring}
    type?: rstring
}

export class aws_ebs_volume implements Resource {
    config: aws_ebs_volume_config
    private _is_data: boolean = false
    private _name: string = "aws_ebs_volume"
    private _id: string;
    constructor(id: string, config: aws_ebs_volume_config) {
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
    get ref_availability_zone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.availability_zone`)
    }
    get ref_encrypted(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.encrypted`)
    }
    get ref_iops(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.iops`)
    }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.size`)
    }
    get ref_snapshot_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.snapshot_id`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
}

