import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_kinesis_stream_config {
    arn?: rstring
    encryption_type?: rstring
    kms_key_id?: rstring
    name: rstring
    retention_period?: rnumber
    shard_count: rnumber
    shard_level_metrics?: rstring[]
    tags?: {[propName: string]: rstring}
}

export class aws_kinesis_stream implements Resource {
    config: aws_kinesis_stream_config
    private _is_data: boolean = false
    private _name: string = "aws_kinesis_stream"
    private _id: string;
    constructor(id: string, config: aws_kinesis_stream_config) {
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
    get ref_encryption_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.encryption_type`)
    }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_retention_period(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.retention_period`)
    }
    get ref_shard_count(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.shard_count`)
    }
    get ref_shard_level_metrics(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.shard_level_metrics`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

