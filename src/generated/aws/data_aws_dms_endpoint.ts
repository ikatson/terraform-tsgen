import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_dms_endpoint__mongodb_settings {
    auth_mechanism?: rstring
    auth_source?: rstring
    auth_type?: rstring
    docs_to_investigate?: rstring
    extract_doc_id?: rstring
    nesting_level?: rstring
}

export interface _data_aws_dms_endpoint__s3_settings {
    bucket_folder?: rstring
    bucket_name?: rstring
    compression_type?: rstring
    csv_delimiter?: rstring
    csv_row_delimiter?: rstring
    external_table_definition?: rstring
    service_access_role_arn?: rstring
}

export interface data_aws_dms_endpoint_config {
    certificate_arn?: rstring
    database_name?: rstring
    endpoint_arn?: rstring
    endpoint_id: rstring
    endpoint_type: rstring
    engine_name: rstring
    extra_connection_attributes?: rstring
    kms_key_arn?: rstring
    mongodb_settings?: _data_aws_dms_endpoint__mongodb_settings[]
    password?: rstring
    port?: rnumber
    s3_settings?: _data_aws_dms_endpoint__s3_settings[]
    server_name?: rstring
    service_access_role?: rstring
    ssl_mode?: rstring
    tags?: {[propName: string]: rstring}
    username?: rstring
}

export class data_aws_dms_endpoint implements Data {
    config: data_aws_dms_endpoint_config
    private _is_data: boolean = true
    private _name: string = "data_aws_dms_endpoint"
    private _id: string;
    constructor(id: string, config: data_aws_dms_endpoint_config) {
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
    
    get ref_certificate_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.certificate_arn`)
  }
    get ref_database_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.database_name`)
  }
    get ref_endpoint_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint_arn`)
  }
    get ref_endpoint_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint_id`)
  }
    get ref_endpoint_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint_type`)
  }
    get ref_engine_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine_name`)
  }
    get ref_extra_connection_attributes(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.extra_connection_attributes`)
  }
    get ref_kms_key_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_arn`)
  }
    get ref_mongodb_settings(): Reference<_data_aws_dms_endpoint__mongodb_settings[]> {
        return new Reference(`data.${this._name}.${this._id}.mongodb_settings`)
  }
    get ref_password(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.password`)
  }
    get ref_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.port`)
  }
    get ref_s3_settings(): Reference<_data_aws_dms_endpoint__s3_settings[]> {
        return new Reference(`data.${this._name}.${this._id}.s3_settings`)
  }
    get ref_server_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.server_name`)
  }
    get ref_service_access_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_access_role`)
  }
    get ref_ssl_mode(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ssl_mode`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_username(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.username`)
  }
}

