import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_kinesis_firehose_delivery_stream__elasticsearch_configuration__cloudwatch_logging_options {
    enabled?: rboolean
    log_group_name?: rstring
    log_stream_name?: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__elasticsearch_configuration__processing_configuration__processors__parameters {
    parameter_name: rstring
    parameter_value: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__elasticsearch_configuration__processing_configuration__processors {
    parameters?: __aws_kinesis_firehose_delivery_stream__elasticsearch_configuration__processing_configuration__processors__parameters[]
    type: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__elasticsearch_configuration__processing_configuration {
    enabled?: rboolean
    processors?: __aws_kinesis_firehose_delivery_stream__elasticsearch_configuration__processing_configuration__processors[]
}

export interface _aws_kinesis_firehose_delivery_stream__elasticsearch_configuration {
    buffering_interval?: rnumber
    buffering_size?: rnumber
    cloudwatch_logging_options?: __aws_kinesis_firehose_delivery_stream__elasticsearch_configuration__cloudwatch_logging_options[]
    domain_arn: rstring
    index_name: rstring
    index_rotation_period?: rstring
    processing_configuration?: __aws_kinesis_firehose_delivery_stream__elasticsearch_configuration__processing_configuration[]
    retry_duration?: rnumber
    role_arn: rstring
    s3_backup_mode?: rstring
    type_name?: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__cloudwatch_logging_options {
    enabled?: rboolean
    log_group_name?: rstring
    log_stream_name?: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__input_format_configuration__deserializer__hive_json_ser_de {
    timestamp_formats?: rstring[]
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__input_format_configuration__deserializer__open_x_json_ser_de {
    case_insensitive?: rboolean
    column_to_json_key_mappings?: {[propName: string]: rstring}
    convert_dots_in_json_keys_to_underscores?: rboolean
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__input_format_configuration__deserializer {
    hive_json_ser_de?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__input_format_configuration__deserializer__hive_json_ser_de[]
    open_x_json_ser_de?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__input_format_configuration__deserializer__open_x_json_ser_de[]
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__input_format_configuration {
    deserializer: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__input_format_configuration__deserializer[]
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__output_format_configuration__serializer__orc_ser_de {
    block_size_bytes?: rnumber
    bloom_filter_columns?: rstring[]
    bloom_filter_false_positive_probability?: rnumber
    compression?: rstring
    dictionary_key_threshold?: rnumber
    enable_padding?: rboolean
    format_version?: rstring
    padding_tolerance?: rnumber
    row_index_stride?: rnumber
    stripe_size_bytes?: rnumber
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__output_format_configuration__serializer__parquet_ser_de {
    block_size_bytes?: rnumber
    compression?: rstring
    enable_dictionary_compression?: rboolean
    max_padding_bytes?: rnumber
    page_size_bytes?: rnumber
    writer_version?: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__output_format_configuration__serializer {
    orc_ser_de?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__output_format_configuration__serializer__orc_ser_de[]
    parquet_ser_de?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__output_format_configuration__serializer__parquet_ser_de[]
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__output_format_configuration {
    serializer: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__output_format_configuration__serializer[]
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__schema_configuration {
    catalog_id?: rstring
    database_name: rstring
    region?: rstring
    role_arn: rstring
    table_name: rstring
    version_id?: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration {
    enabled?: rboolean
    input_format_configuration: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__input_format_configuration[]
    output_format_configuration: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__output_format_configuration[]
    schema_configuration: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration__schema_configuration[]
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__processing_configuration__processors__parameters {
    parameter_name: rstring
    parameter_value: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__processing_configuration__processors {
    parameters?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__processing_configuration__processors__parameters[]
    type: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__processing_configuration {
    enabled?: rboolean
    processors?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__processing_configuration__processors[]
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__s3_backup_configuration__cloudwatch_logging_options {
    enabled?: rboolean
    log_group_name?: rstring
    log_stream_name?: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__s3_backup_configuration {
    bucket_arn: rstring
    buffer_interval?: rnumber
    buffer_size?: rnumber
    cloudwatch_logging_options?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__s3_backup_configuration__cloudwatch_logging_options[]
    compression_format?: rstring
    kms_key_arn?: rstring
    prefix?: rstring
    role_arn: rstring
}

export interface _aws_kinesis_firehose_delivery_stream__extended_s3_configuration {
    bucket_arn: rstring
    buffer_interval?: rnumber
    buffer_size?: rnumber
    cloudwatch_logging_options?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__cloudwatch_logging_options[]
    compression_format?: rstring
    data_format_conversion_configuration?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__data_format_conversion_configuration[]
    error_output_prefix?: rstring
    kms_key_arn?: rstring
    prefix?: rstring
    processing_configuration?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__processing_configuration[]
    role_arn: rstring
    s3_backup_configuration?: __aws_kinesis_firehose_delivery_stream__extended_s3_configuration__s3_backup_configuration[]
    s3_backup_mode?: rstring
}

export interface _aws_kinesis_firehose_delivery_stream__kinesis_source_configuration {
    kinesis_stream_arn: rstring
    role_arn: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__redshift_configuration__cloudwatch_logging_options {
    enabled?: rboolean
    log_group_name?: rstring
    log_stream_name?: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__redshift_configuration__processing_configuration__processors__parameters {
    parameter_name: rstring
    parameter_value: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__redshift_configuration__processing_configuration__processors {
    parameters?: __aws_kinesis_firehose_delivery_stream__redshift_configuration__processing_configuration__processors__parameters[]
    type: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__redshift_configuration__processing_configuration {
    enabled?: rboolean
    processors?: __aws_kinesis_firehose_delivery_stream__redshift_configuration__processing_configuration__processors[]
}

export interface __aws_kinesis_firehose_delivery_stream__redshift_configuration__s3_backup_configuration__cloudwatch_logging_options {
    enabled?: rboolean
    log_group_name?: rstring
    log_stream_name?: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__redshift_configuration__s3_backup_configuration {
    bucket_arn: rstring
    buffer_interval?: rnumber
    buffer_size?: rnumber
    cloudwatch_logging_options?: __aws_kinesis_firehose_delivery_stream__redshift_configuration__s3_backup_configuration__cloudwatch_logging_options[]
    compression_format?: rstring
    kms_key_arn?: rstring
    prefix?: rstring
    role_arn: rstring
}

export interface _aws_kinesis_firehose_delivery_stream__redshift_configuration {
    cloudwatch_logging_options?: __aws_kinesis_firehose_delivery_stream__redshift_configuration__cloudwatch_logging_options[]
    cluster_jdbcurl: rstring
    copy_options?: rstring
    data_table_columns?: rstring
    data_table_name: rstring
    password: rstring
    processing_configuration?: __aws_kinesis_firehose_delivery_stream__redshift_configuration__processing_configuration[]
    retry_duration?: rnumber
    role_arn: rstring
    s3_backup_configuration?: __aws_kinesis_firehose_delivery_stream__redshift_configuration__s3_backup_configuration[]
    s3_backup_mode?: rstring
    username: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__s3_configuration__cloudwatch_logging_options {
    enabled?: rboolean
    log_group_name?: rstring
    log_stream_name?: rstring
}

export interface _aws_kinesis_firehose_delivery_stream__s3_configuration {
    bucket_arn: rstring
    buffer_interval?: rnumber
    buffer_size?: rnumber
    cloudwatch_logging_options?: __aws_kinesis_firehose_delivery_stream__s3_configuration__cloudwatch_logging_options[]
    compression_format?: rstring
    kms_key_arn?: rstring
    prefix?: rstring
    role_arn: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__splunk_configuration__cloudwatch_logging_options {
    enabled?: rboolean
    log_group_name?: rstring
    log_stream_name?: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__splunk_configuration__processing_configuration__processors__parameters {
    parameter_name: rstring
    parameter_value: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__splunk_configuration__processing_configuration__processors {
    parameters?: __aws_kinesis_firehose_delivery_stream__splunk_configuration__processing_configuration__processors__parameters[]
    type: rstring
}

export interface __aws_kinesis_firehose_delivery_stream__splunk_configuration__processing_configuration {
    enabled?: rboolean
    processors?: __aws_kinesis_firehose_delivery_stream__splunk_configuration__processing_configuration__processors[]
}

export interface _aws_kinesis_firehose_delivery_stream__splunk_configuration {
    cloudwatch_logging_options?: __aws_kinesis_firehose_delivery_stream__splunk_configuration__cloudwatch_logging_options[]
    hec_acknowledgment_timeout?: rnumber
    hec_endpoint: rstring
    hec_endpoint_type?: rstring
    hec_token: rstring
    processing_configuration?: __aws_kinesis_firehose_delivery_stream__splunk_configuration__processing_configuration[]
    retry_duration?: rnumber
    s3_backup_mode?: rstring
}

export interface aws_kinesis_firehose_delivery_stream_config {
    arn?: rstring
    destination: rstring
    destination_id?: rstring
    elasticsearch_configuration?: _aws_kinesis_firehose_delivery_stream__elasticsearch_configuration[]
    extended_s3_configuration?: _aws_kinesis_firehose_delivery_stream__extended_s3_configuration[]
    kinesis_source_configuration?: _aws_kinesis_firehose_delivery_stream__kinesis_source_configuration[]
    name: rstring
    redshift_configuration?: _aws_kinesis_firehose_delivery_stream__redshift_configuration[]
    s3_configuration?: _aws_kinesis_firehose_delivery_stream__s3_configuration[]
    splunk_configuration?: _aws_kinesis_firehose_delivery_stream__splunk_configuration[]
    tags?: {[propName: string]: rstring}
    version_id?: rstring
}

export class aws_kinesis_firehose_delivery_stream implements Resource {
    config: aws_kinesis_firehose_delivery_stream_config
    private _is_data: boolean = false
    private _name: string = "aws_kinesis_firehose_delivery_stream"
    private _id: string;
    constructor(id: string, config: aws_kinesis_firehose_delivery_stream_config) {
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
    get ref_destination(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.destination`)
    }
    get ref_destination_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.destination_id`)
    }
    get ref_elasticsearch_configuration(): Reference<_aws_kinesis_firehose_delivery_stream__elasticsearch_configuration[]> {
        return new Reference(`${this._name}.${this._id}.elasticsearch_configuration`)
    }
    get ref_extended_s3_configuration(): Reference<_aws_kinesis_firehose_delivery_stream__extended_s3_configuration[]> {
        return new Reference(`${this._name}.${this._id}.extended_s3_configuration`)
    }
    get ref_kinesis_source_configuration(): Reference<_aws_kinesis_firehose_delivery_stream__kinesis_source_configuration[]> {
        return new Reference(`${this._name}.${this._id}.kinesis_source_configuration`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_redshift_configuration(): Reference<_aws_kinesis_firehose_delivery_stream__redshift_configuration[]> {
        return new Reference(`${this._name}.${this._id}.redshift_configuration`)
    }
    get ref_s3_configuration(): Reference<_aws_kinesis_firehose_delivery_stream__s3_configuration[]> {
        return new Reference(`${this._name}.${this._id}.s3_configuration`)
    }
    get ref_splunk_configuration(): Reference<_aws_kinesis_firehose_delivery_stream__splunk_configuration[]> {
        return new Reference(`${this._name}.${this._id}.splunk_configuration`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_version_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.version_id`)
    }
}

