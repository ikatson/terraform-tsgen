import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_kinesis_stream_config {
    arn?: rstring
    closed_shards?: rstring[]
    creation_timestamp?: rnumber
    name: rstring
    open_shards?: rstring[]
    retention_period?: rnumber
    shard_level_metrics?: rstring[]
    status?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_kinesis_stream implements Data {
    config: data_aws_kinesis_stream_config
    private _is_data: boolean = true
    private _name: string = "aws_kinesis_stream"
    private _id: string;
    constructor(id: string, config: data_aws_kinesis_stream_config) {
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
    get ref_closed_shards(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.closed_shards`)
  }
    get ref_creation_timestamp(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.creation_timestamp`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_open_shards(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.open_shards`)
  }
    get ref_retention_period(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.retention_period`)
  }
    get ref_shard_level_metrics(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.shard_level_metrics`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

