import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_iot_topic_rule__cloudwatch_alarm {
    alarm_name: rstring
    role_arn: rstring
    state_reason: rstring
    state_value: rstring
}

export interface _aws_iot_topic_rule__cloudwatch_metric {
    metric_name: rstring
    metric_namespace: rstring
    metric_timestamp?: rstring
    metric_unit: rstring
    metric_value: rstring
    role_arn: rstring
}

export interface _aws_iot_topic_rule__dynamodb {
    hash_key_field: rstring
    hash_key_type?: rstring
    hash_key_value: rstring
    payload_field?: rstring
    range_key_field?: rstring
    range_key_type?: rstring
    range_key_value?: rstring
    role_arn: rstring
    table_name: rstring
}

export interface _aws_iot_topic_rule__elasticsearch {
    endpoint: rstring
    id: rstring
    index: rstring
    role_arn: rstring
    type: rstring
}

export interface _aws_iot_topic_rule__firehose {
    delivery_stream_name: rstring
    role_arn: rstring
    separator?: rstring
}

export interface _aws_iot_topic_rule__kinesis {
    partition_key?: rstring
    role_arn: rstring
    stream_name: rstring
}

export interface _aws_iot_topic_rule__lambda {
    function_arn: rstring
}

export interface _aws_iot_topic_rule__republish {
    role_arn: rstring
    topic: rstring
}

export interface _aws_iot_topic_rule__s3 {
    bucket_name: rstring
    key: rstring
    role_arn: rstring
}

export interface _aws_iot_topic_rule__sns {
    message_format?: rstring
    role_arn: rstring
    target_arn: rstring
}

export interface _aws_iot_topic_rule__sqs {
    queue_url: rstring
    role_arn: rstring
    use_base64: rboolean
}

export interface aws_iot_topic_rule_config {
    arn?: rstring
    cloudwatch_alarm?: _aws_iot_topic_rule__cloudwatch_alarm[]
    cloudwatch_metric?: _aws_iot_topic_rule__cloudwatch_metric[]
    description?: rstring
    dynamodb?: _aws_iot_topic_rule__dynamodb[]
    elasticsearch?: _aws_iot_topic_rule__elasticsearch[]
    enabled: rboolean
    firehose?: _aws_iot_topic_rule__firehose[]
    kinesis?: _aws_iot_topic_rule__kinesis[]
    lambda?: _aws_iot_topic_rule__lambda[]
    name: rstring
    republish?: _aws_iot_topic_rule__republish[]
    s3?: _aws_iot_topic_rule__s3[]
    sns?: _aws_iot_topic_rule__sns[]
    sql: rstring
    sql_version: rstring
    sqs?: _aws_iot_topic_rule__sqs[]
}

export class aws_iot_topic_rule implements Resource {
    config: aws_iot_topic_rule_config
    private _is_data: boolean = false
    private _name: string = "aws_iot_topic_rule"
    private _id: string;
    constructor(id: string, config: aws_iot_topic_rule_config) {
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
    get ref_cloudwatch_alarm(): Reference<_aws_iot_topic_rule__cloudwatch_alarm[]> {
        return new Reference(`${this._name}.${this._id}.cloudwatch_alarm`)
    }
    get ref_cloudwatch_metric(): Reference<_aws_iot_topic_rule__cloudwatch_metric[]> {
        return new Reference(`${this._name}.${this._id}.cloudwatch_metric`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_dynamodb(): Reference<_aws_iot_topic_rule__dynamodb[]> {
        return new Reference(`${this._name}.${this._id}.dynamodb`)
    }
    get ref_elasticsearch(): Reference<_aws_iot_topic_rule__elasticsearch[]> {
        return new Reference(`${this._name}.${this._id}.elasticsearch`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_firehose(): Reference<_aws_iot_topic_rule__firehose[]> {
        return new Reference(`${this._name}.${this._id}.firehose`)
    }
    get ref_kinesis(): Reference<_aws_iot_topic_rule__kinesis[]> {
        return new Reference(`${this._name}.${this._id}.kinesis`)
    }
    get ref_lambda(): Reference<_aws_iot_topic_rule__lambda[]> {
        return new Reference(`${this._name}.${this._id}.lambda`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_republish(): Reference<_aws_iot_topic_rule__republish[]> {
        return new Reference(`${this._name}.${this._id}.republish`)
    }
    get ref_s3(): Reference<_aws_iot_topic_rule__s3[]> {
        return new Reference(`${this._name}.${this._id}.s3`)
    }
    get ref_sns(): Reference<_aws_iot_topic_rule__sns[]> {
        return new Reference(`${this._name}.${this._id}.sns`)
    }
    get ref_sql(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sql`)
    }
    get ref_sql_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sql_version`)
    }
    get ref_sqs(): Reference<_aws_iot_topic_rule__sqs[]> {
        return new Reference(`${this._name}.${this._id}.sqs`)
    }
}

