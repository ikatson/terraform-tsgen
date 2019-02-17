import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_s3_bucket_notification__lambda_function {
    events: rstring[]
    filter_prefix?: rstring
    filter_suffix?: rstring
    id?: rstring
    lambda_function_arn?: rstring
}

export interface _aws_s3_bucket_notification__queue {
    events: rstring[]
    filter_prefix?: rstring
    filter_suffix?: rstring
    id?: rstring
    queue_arn: rstring
}

export interface _aws_s3_bucket_notification__topic {
    events: rstring[]
    filter_prefix?: rstring
    filter_suffix?: rstring
    id?: rstring
    topic_arn: rstring
}

export interface aws_s3_bucket_notification_config {
    bucket: rstring
    lambda_function?: _aws_s3_bucket_notification__lambda_function[]
    queue?: _aws_s3_bucket_notification__queue[]
    topic?: _aws_s3_bucket_notification__topic[]
}

export class aws_s3_bucket_notification implements Resource {
    config: aws_s3_bucket_notification_config
    private _is_data: boolean = false
    private _name: string = "aws_s3_bucket_notification"
    private _id: string;
    constructor(id: string, config: aws_s3_bucket_notification_config) {
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
        return new Reference(`${this._name}.${this._id}.bucket`)
    }
    get ref_lambda_function(): Reference<_aws_s3_bucket_notification__lambda_function[]> {
        return new Reference(`${this._name}.${this._id}.lambda_function`)
    }
    get ref_queue(): Reference<_aws_s3_bucket_notification__queue[]> {
        return new Reference(`${this._name}.${this._id}.queue`)
    }
    get ref_topic(): Reference<_aws_s3_bucket_notification__topic[]> {
        return new Reference(`${this._name}.${this._id}.topic`)
    }
}

