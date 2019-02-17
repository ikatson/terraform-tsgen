import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_s3_bucket_notification__lambda_function {
    events: rstring[]
    filter_prefix?: rstring
    filter_suffix?: rstring
    id?: rstring
    lambda_function_arn?: rstring
}

export interface _data_aws_s3_bucket_notification__queue {
    events: rstring[]
    filter_prefix?: rstring
    filter_suffix?: rstring
    id?: rstring
    queue_arn: rstring
}

export interface _data_aws_s3_bucket_notification__topic {
    events: rstring[]
    filter_prefix?: rstring
    filter_suffix?: rstring
    id?: rstring
    topic_arn: rstring
}

export interface data_aws_s3_bucket_notification_config {
    bucket: rstring
    lambda_function?: _data_aws_s3_bucket_notification__lambda_function[]
    queue?: _data_aws_s3_bucket_notification__queue[]
    topic?: _data_aws_s3_bucket_notification__topic[]
}

export class data_aws_s3_bucket_notification implements Data {
    config: data_aws_s3_bucket_notification_config
    private _is_data: boolean = true
    private _name: string = "data_aws_s3_bucket_notification"
    private _id: string;
    constructor(id: string, config: data_aws_s3_bucket_notification_config) {
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
    
    get ref_bucket(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bucket`)
  }
    get ref_lambda_function(): Reference<_data_aws_s3_bucket_notification__lambda_function[]> {
        return new Reference(`data.${this._name}.${this._id}.lambda_function`)
  }
    get ref_queue(): Reference<_data_aws_s3_bucket_notification__queue[]> {
        return new Reference(`data.${this._name}.${this._id}.queue`)
  }
    get ref_topic(): Reference<_data_aws_s3_bucket_notification__topic[]> {
        return new Reference(`data.${this._name}.${this._id}.topic`)
  }
}

