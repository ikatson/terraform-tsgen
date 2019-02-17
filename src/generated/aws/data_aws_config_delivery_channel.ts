import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_config_delivery_channel__snapshot_delivery_properties {
    delivery_frequency?: rstring
}

export interface data_aws_config_delivery_channel_config {
    name?: rstring
    s3_bucket_name: rstring
    s3_key_prefix?: rstring
    snapshot_delivery_properties?: _data_aws_config_delivery_channel__snapshot_delivery_properties[]
    sns_topic_arn?: rstring
}

export class data_aws_config_delivery_channel implements Data {
    config: data_aws_config_delivery_channel_config
    private _is_data: boolean = true
    private _name: string = "data_aws_config_delivery_channel"
    private _id: string;
    constructor(id: string, config: data_aws_config_delivery_channel_config) {
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
    
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_s3_bucket_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.s3_bucket_name`)
  }
    get ref_s3_key_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.s3_key_prefix`)
  }
    get ref_snapshot_delivery_properties(): Reference<_data_aws_config_delivery_channel__snapshot_delivery_properties[]> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_delivery_properties`)
  }
    get ref_sns_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.sns_topic_arn`)
  }
}

