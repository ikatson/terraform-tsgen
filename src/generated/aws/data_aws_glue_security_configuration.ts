import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_glue_security_configuration__encryption_configuration__cloudwatch_encryption {
    cloudwatch_encryption_mode?: rstring
    kms_key_arn?: rstring
}

export interface __data_aws_glue_security_configuration__encryption_configuration__job_bookmarks_encryption {
    job_bookmarks_encryption_mode?: rstring
    kms_key_arn?: rstring
}

export interface __data_aws_glue_security_configuration__encryption_configuration__s3_encryption {
    kms_key_arn?: rstring
    s3_encryption_mode?: rstring
}

export interface _data_aws_glue_security_configuration__encryption_configuration {
    cloudwatch_encryption: __data_aws_glue_security_configuration__encryption_configuration__cloudwatch_encryption[]
    job_bookmarks_encryption: __data_aws_glue_security_configuration__encryption_configuration__job_bookmarks_encryption[]
    s3_encryption: __data_aws_glue_security_configuration__encryption_configuration__s3_encryption[]
}

export interface data_aws_glue_security_configuration_config {
    encryption_configuration: _data_aws_glue_security_configuration__encryption_configuration[]
    name: rstring
}

export class data_aws_glue_security_configuration implements Data {
    config: data_aws_glue_security_configuration_config
    private _is_data: boolean = true
    private _name: string = "data_aws_glue_security_configuration"
    private _id: string;
    constructor(id: string, config: data_aws_glue_security_configuration_config) {
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
    
    get ref_encryption_configuration(): Reference<_data_aws_glue_security_configuration__encryption_configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.encryption_configuration`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

