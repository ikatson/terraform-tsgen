import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_athena_database__encryption_configuration {
    encryption_option: rstring
    kms_key?: rstring
}

export interface data_aws_athena_database_config {
    bucket: rstring
    encryption_configuration?: _data_aws_athena_database__encryption_configuration[]
    force_destroy?: rboolean
    name: rstring
}

export class data_aws_athena_database implements Data {
    config: data_aws_athena_database_config
    private _is_data: boolean = true
    private _name: string = "data_aws_athena_database"
    private _id: string;
    constructor(id: string, config: data_aws_athena_database_config) {
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
    get ref_encryption_configuration(): Reference<_data_aws_athena_database__encryption_configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.encryption_configuration`)
  }
    get ref_force_destroy(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.force_destroy`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

