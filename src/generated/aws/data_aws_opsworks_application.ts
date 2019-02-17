import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_opsworks_application__app_source {
    password?: rstring
    revision?: rstring
    ssh_key?: rstring
    type: rstring
    url?: rstring
    username?: rstring
}

export interface _data_aws_opsworks_application__environment {
    key: rstring
    secure?: rboolean
    value: rstring
}

export interface _data_aws_opsworks_application__ssl_configuration {
    certificate: rstring
    chain?: rstring
    private_key: rstring
}

export interface data_aws_opsworks_application_config {
    app_source?: _data_aws_opsworks_application__app_source[]
    auto_bundle_on_deploy?: rstring
    aws_flow_ruby_settings?: rstring
    data_source_arn?: rstring
    data_source_database_name?: rstring
    data_source_type?: rstring
    description?: rstring
    document_root?: rstring
    domains?: rstring[]
    enable_ssl?: rboolean
    environment?: _data_aws_opsworks_application__environment[]
    name: rstring
    rails_env?: rstring
    short_name?: rstring
    ssl_configuration?: _data_aws_opsworks_application__ssl_configuration[]
    stack_id: rstring
    type: rstring
}

export class data_aws_opsworks_application implements Data {
    config: data_aws_opsworks_application_config
    private _is_data: boolean = true
    private _name: string = "data_aws_opsworks_application"
    private _id: string;
    constructor(id: string, config: data_aws_opsworks_application_config) {
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
    
    get ref_app_source(): Reference<_data_aws_opsworks_application__app_source[]> {
        return new Reference(`data.${this._name}.${this._id}.app_source`)
  }
    get ref_auto_bundle_on_deploy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.auto_bundle_on_deploy`)
  }
    get ref_aws_flow_ruby_settings(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.aws_flow_ruby_settings`)
  }
    get ref_data_source_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.data_source_arn`)
  }
    get ref_data_source_database_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.data_source_database_name`)
  }
    get ref_data_source_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.data_source_type`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_document_root(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.document_root`)
  }
    get ref_domains(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.domains`)
  }
    get ref_enable_ssl(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enable_ssl`)
  }
    get ref_environment(): Reference<_data_aws_opsworks_application__environment[]> {
        return new Reference(`data.${this._name}.${this._id}.environment`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_rails_env(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rails_env`)
  }
    get ref_short_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.short_name`)
  }
    get ref_ssl_configuration(): Reference<_data_aws_opsworks_application__ssl_configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.ssl_configuration`)
  }
    get ref_stack_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.stack_id`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

