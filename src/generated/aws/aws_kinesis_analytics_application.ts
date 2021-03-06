import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_kinesis_analytics_application__cloudwatch_logging_options {
    id?: rstring
    log_stream_arn: rstring
    role_arn: rstring
}

export interface __aws_kinesis_analytics_application__inputs__kinesis_firehose {
    resource_arn: rstring
    role_arn: rstring
}

export interface __aws_kinesis_analytics_application__inputs__kinesis_stream {
    resource_arn: rstring
    role_arn: rstring
}

export interface __aws_kinesis_analytics_application__inputs__parallelism {
    count: rnumber
}

export interface __aws_kinesis_analytics_application__inputs__processing_configuration__lambda {
    resource_arn: rstring
    role_arn: rstring
}

export interface __aws_kinesis_analytics_application__inputs__processing_configuration {
    lambda: __aws_kinesis_analytics_application__inputs__processing_configuration__lambda[]
}

export interface __aws_kinesis_analytics_application__inputs__schema__record_columns {
    mapping?: rstring
    name: rstring
    sql_type: rstring
}

export interface __aws_kinesis_analytics_application__inputs__schema__record_format__mapping_parameters__csv {
    record_column_delimiter: rstring
    record_row_delimiter: rstring
}

export interface __aws_kinesis_analytics_application__inputs__schema__record_format__mapping_parameters__json {
    record_row_path: rstring
}

export interface __aws_kinesis_analytics_application__inputs__schema__record_format__mapping_parameters {
    csv?: __aws_kinesis_analytics_application__inputs__schema__record_format__mapping_parameters__csv[]
    json?: __aws_kinesis_analytics_application__inputs__schema__record_format__mapping_parameters__json[]
}

export interface __aws_kinesis_analytics_application__inputs__schema__record_format {
    mapping_parameters?: __aws_kinesis_analytics_application__inputs__schema__record_format__mapping_parameters[]
    record_format_type?: rstring
}

export interface __aws_kinesis_analytics_application__inputs__schema {
    record_columns: __aws_kinesis_analytics_application__inputs__schema__record_columns[]
    record_encoding?: rstring
    record_format: __aws_kinesis_analytics_application__inputs__schema__record_format[]
}

export interface __aws_kinesis_analytics_application__inputs__starting_position_configuration {
    starting_position?: rstring
}

export interface _aws_kinesis_analytics_application__inputs {
    id?: rstring
    kinesis_firehose?: __aws_kinesis_analytics_application__inputs__kinesis_firehose[]
    kinesis_stream?: __aws_kinesis_analytics_application__inputs__kinesis_stream[]
    name_prefix: rstring
    parallelism?: __aws_kinesis_analytics_application__inputs__parallelism[]
    processing_configuration?: __aws_kinesis_analytics_application__inputs__processing_configuration[]
    schema: __aws_kinesis_analytics_application__inputs__schema[]
    starting_position_configuration?: __aws_kinesis_analytics_application__inputs__starting_position_configuration[]
    stream_names?: rstring[]
}

export interface __aws_kinesis_analytics_application__outputs__kinesis_firehose {
    resource_arn: rstring
    role_arn: rstring
}

export interface __aws_kinesis_analytics_application__outputs__kinesis_stream {
    resource_arn: rstring
    role_arn: rstring
}

export interface __aws_kinesis_analytics_application__outputs__lambda {
    resource_arn: rstring
    role_arn: rstring
}

export interface __aws_kinesis_analytics_application__outputs__schema {
    record_format_type?: rstring
}

export interface _aws_kinesis_analytics_application__outputs {
    id?: rstring
    kinesis_firehose?: __aws_kinesis_analytics_application__outputs__kinesis_firehose[]
    kinesis_stream?: __aws_kinesis_analytics_application__outputs__kinesis_stream[]
    lambda?: __aws_kinesis_analytics_application__outputs__lambda[]
    name: rstring
    schema: __aws_kinesis_analytics_application__outputs__schema[]
}

export interface __aws_kinesis_analytics_application__reference_data_sources__s3 {
    bucket_arn: rstring
    file_key: rstring
    role_arn: rstring
}

export interface __aws_kinesis_analytics_application__reference_data_sources__schema__record_columns {
    mapping?: rstring
    name: rstring
    sql_type: rstring
}

export interface __aws_kinesis_analytics_application__reference_data_sources__schema__record_format__mapping_parameters__csv {
    record_column_delimiter: rstring
    record_row_delimiter: rstring
}

export interface __aws_kinesis_analytics_application__reference_data_sources__schema__record_format__mapping_parameters__json {
    record_row_path: rstring
}

export interface __aws_kinesis_analytics_application__reference_data_sources__schema__record_format__mapping_parameters {
    csv?: __aws_kinesis_analytics_application__reference_data_sources__schema__record_format__mapping_parameters__csv[]
    json?: __aws_kinesis_analytics_application__reference_data_sources__schema__record_format__mapping_parameters__json[]
}

export interface __aws_kinesis_analytics_application__reference_data_sources__schema__record_format {
    mapping_parameters?: __aws_kinesis_analytics_application__reference_data_sources__schema__record_format__mapping_parameters[]
    record_format_type?: rstring
}

export interface __aws_kinesis_analytics_application__reference_data_sources__schema {
    record_columns: __aws_kinesis_analytics_application__reference_data_sources__schema__record_columns[]
    record_encoding?: rstring
    record_format: __aws_kinesis_analytics_application__reference_data_sources__schema__record_format[]
}

export interface _aws_kinesis_analytics_application__reference_data_sources {
    id?: rstring
    s3: __aws_kinesis_analytics_application__reference_data_sources__s3[]
    schema: __aws_kinesis_analytics_application__reference_data_sources__schema[]
    table_name: rstring
}

export interface aws_kinesis_analytics_application_config {
    arn?: rstring
    cloudwatch_logging_options?: _aws_kinesis_analytics_application__cloudwatch_logging_options[]
    code?: rstring
    create_timestamp?: rstring
    description?: rstring
    inputs?: _aws_kinesis_analytics_application__inputs[]
    last_update_timestamp?: rstring
    name: rstring
    outputs?: _aws_kinesis_analytics_application__outputs[]
    reference_data_sources?: _aws_kinesis_analytics_application__reference_data_sources[]
    status?: rstring
    version?: rnumber
}

export class aws_kinesis_analytics_application implements Resource {
    config: aws_kinesis_analytics_application_config
    private _is_data: boolean = false
    private _name: string = "aws_kinesis_analytics_application"
    private _id: string;
    constructor(id: string, config: aws_kinesis_analytics_application_config) {
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
    get ref_cloudwatch_logging_options(): Reference<_aws_kinesis_analytics_application__cloudwatch_logging_options[]> {
        return new Reference(`${this._name}.${this._id}.cloudwatch_logging_options`)
    }
    get ref_code(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.code`)
    }
    get ref_create_timestamp(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.create_timestamp`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_inputs(): Reference<_aws_kinesis_analytics_application__inputs[]> {
        return new Reference(`${this._name}.${this._id}.inputs`)
    }
    get ref_last_update_timestamp(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.last_update_timestamp`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_outputs(): Reference<_aws_kinesis_analytics_application__outputs[]> {
        return new Reference(`${this._name}.${this._id}.outputs`)
    }
    get ref_reference_data_sources(): Reference<_aws_kinesis_analytics_application__reference_data_sources[]> {
        return new Reference(`${this._name}.${this._id}.reference_data_sources`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_version(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.version`)
    }
}

