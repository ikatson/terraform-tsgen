import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_db_option_group__option__option_settings {
    name: rstring
    value: rstring
}

export interface _data_aws_db_option_group__option {
    db_security_group_memberships?: rstring[]
    option_name: rstring
    option_settings?: __data_aws_db_option_group__option__option_settings[]
    port?: rnumber
    version?: rstring
    vpc_security_group_memberships?: rstring[]
}

export interface data_aws_db_option_group_config {
    arn?: rstring
    engine_name: rstring
    major_engine_version: rstring
    name?: rstring
    name_prefix?: rstring
    option?: _data_aws_db_option_group__option[]
    option_group_description?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_db_option_group implements Data {
    config: data_aws_db_option_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_db_option_group"
    private _id: string;
    constructor(id: string, config: data_aws_db_option_group_config) {
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
    get ref_engine_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine_name`)
  }
    get ref_major_engine_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.major_engine_version`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_prefix`)
  }
    get ref_option(): Reference<_data_aws_db_option_group__option[]> {
        return new Reference(`data.${this._name}.${this._id}.option`)
  }
    get ref_option_group_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.option_group_description`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

