import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_glue_catalog_table__partition_keys {
    comment?: rstring
    name: rstring
    type?: rstring
}

export interface __aws_glue_catalog_table__storage_descriptor__columns {
    comment?: rstring
    name: rstring
    type?: rstring
}

export interface __aws_glue_catalog_table__storage_descriptor__ser_de_info {
    name?: rstring
    parameters?: {[propName: string]: rstring}
    serialization_library?: rstring
}

export interface __aws_glue_catalog_table__storage_descriptor__skewed_info {
    skewed_column_names?: rstring[]
    skewed_column_value_location_maps?: {[propName: string]: rstring}
    skewed_column_values?: rstring[]
}

export interface __aws_glue_catalog_table__storage_descriptor__sort_columns {
    column: rstring
    sort_order: rnumber
}

export interface _aws_glue_catalog_table__storage_descriptor {
    bucket_columns?: rstring[]
    columns?: __aws_glue_catalog_table__storage_descriptor__columns[]
    compressed?: rboolean
    input_format?: rstring
    location?: rstring
    number_of_buckets?: rnumber
    output_format?: rstring
    parameters?: {[propName: string]: rstring}
    ser_de_info?: __aws_glue_catalog_table__storage_descriptor__ser_de_info[]
    skewed_info?: __aws_glue_catalog_table__storage_descriptor__skewed_info[]
    sort_columns?: __aws_glue_catalog_table__storage_descriptor__sort_columns[]
    stored_as_sub_directories?: rboolean
}

export interface aws_glue_catalog_table_config {
    catalog_id?: rstring
    database_name: rstring
    description?: rstring
    name: rstring
    owner?: rstring
    parameters?: {[propName: string]: rstring}
    partition_keys?: _aws_glue_catalog_table__partition_keys[]
    retention?: rnumber
    storage_descriptor?: _aws_glue_catalog_table__storage_descriptor[]
    table_type?: rstring
    view_expanded_text?: rstring
    view_original_text?: rstring
}

export class aws_glue_catalog_table implements Resource {
    config: aws_glue_catalog_table_config
    private _is_data: boolean = false
    private _name: string = "aws_glue_catalog_table"
    private _id: string;
    constructor(id: string, config: aws_glue_catalog_table_config) {
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
    
    get ref_catalog_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.catalog_id`)
    }
    get ref_database_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.database_name`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_owner(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner`)
    }
    get ref_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.parameters`)
    }
    get ref_partition_keys(): Reference<_aws_glue_catalog_table__partition_keys[]> {
        return new Reference(`${this._name}.${this._id}.partition_keys`)
    }
    get ref_retention(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.retention`)
    }
    get ref_storage_descriptor(): Reference<_aws_glue_catalog_table__storage_descriptor[]> {
        return new Reference(`${this._name}.${this._id}.storage_descriptor`)
    }
    get ref_table_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.table_type`)
    }
    get ref_view_expanded_text(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.view_expanded_text`)
    }
    get ref_view_original_text(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.view_original_text`)
    }
}

