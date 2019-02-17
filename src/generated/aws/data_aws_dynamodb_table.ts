import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_dynamodb_table__attribute {
    name?: rstring
    type?: rstring
}

export interface _data_aws_dynamodb_table__global_secondary_index {
    hash_key?: rstring
    name?: rstring
    non_key_attributes?: rstring[]
    projection_type?: rstring
    range_key?: rstring
    read_capacity?: rnumber
    write_capacity?: rnumber
}

export interface _data_aws_dynamodb_table__local_secondary_index {
    name?: rstring
    non_key_attributes?: rstring[]
    projection_type?: rstring
    range_key?: rstring
}

export interface _data_aws_dynamodb_table__point_in_time_recovery {
    enabled?: rboolean
}

export interface _data_aws_dynamodb_table__server_side_encryption {
    enabled?: rboolean
}

export interface _data_aws_dynamodb_table__ttl {
    attribute_name?: rstring
    enabled?: rboolean
}

export interface data_aws_dynamodb_table_config {
    arn?: rstring
    attribute?: _data_aws_dynamodb_table__attribute[]
    billing_mode?: rstring
    global_secondary_index?: _data_aws_dynamodb_table__global_secondary_index[]
    hash_key?: rstring
    local_secondary_index?: _data_aws_dynamodb_table__local_secondary_index[]
    name: rstring
    point_in_time_recovery?: _data_aws_dynamodb_table__point_in_time_recovery[]
    range_key?: rstring
    read_capacity?: rnumber
    server_side_encryption?: _data_aws_dynamodb_table__server_side_encryption[]
    stream_arn?: rstring
    stream_enabled?: rboolean
    stream_label?: rstring
    stream_view_type?: rstring
    tags?: {[propName: string]: rstring}
    ttl?: _data_aws_dynamodb_table__ttl[]
    write_capacity?: rnumber
}

export class data_aws_dynamodb_table implements Data {
    config: data_aws_dynamodb_table_config
    private _is_data: boolean = true
    private _name: string = "aws_dynamodb_table"
    private _id: string;
    constructor(id: string, config: data_aws_dynamodb_table_config) {
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
    get ref_attribute(): Reference<_data_aws_dynamodb_table__attribute[]> {
        return new Reference(`data.${this._name}.${this._id}.attribute`)
  }
    get ref_billing_mode(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.billing_mode`)
  }
    get ref_global_secondary_index(): Reference<_data_aws_dynamodb_table__global_secondary_index[]> {
        return new Reference(`data.${this._name}.${this._id}.global_secondary_index`)
  }
    get ref_hash_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.hash_key`)
  }
    get ref_local_secondary_index(): Reference<_data_aws_dynamodb_table__local_secondary_index[]> {
        return new Reference(`data.${this._name}.${this._id}.local_secondary_index`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_point_in_time_recovery(): Reference<_data_aws_dynamodb_table__point_in_time_recovery[]> {
        return new Reference(`data.${this._name}.${this._id}.point_in_time_recovery`)
  }
    get ref_range_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.range_key`)
  }
    get ref_read_capacity(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.read_capacity`)
  }
    get ref_server_side_encryption(): Reference<_data_aws_dynamodb_table__server_side_encryption[]> {
        return new Reference(`data.${this._name}.${this._id}.server_side_encryption`)
  }
    get ref_stream_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.stream_arn`)
  }
    get ref_stream_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.stream_enabled`)
  }
    get ref_stream_label(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.stream_label`)
  }
    get ref_stream_view_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.stream_view_type`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_ttl(): Reference<_data_aws_dynamodb_table__ttl[]> {
        return new Reference(`data.${this._name}.${this._id}.ttl`)
  }
    get ref_write_capacity(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.write_capacity`)
  }
}

