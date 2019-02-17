import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_ssm_resource_data_sync__s3_destination {
    bucket_name: rstring
    kms_key_arn?: rstring
    prefix?: rstring
    region: rstring
    sync_format?: rstring
}

export interface data_aws_ssm_resource_data_sync_config {
    name: rstring
    s3_destination: _data_aws_ssm_resource_data_sync__s3_destination[]
}

export class data_aws_ssm_resource_data_sync implements Data {
    config: data_aws_ssm_resource_data_sync_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ssm_resource_data_sync"
    private _id: string;
    constructor(id: string, config: data_aws_ssm_resource_data_sync_config) {
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
    
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_s3_destination(): Reference<_data_aws_ssm_resource_data_sync__s3_destination[]> {
        return new Reference(`data.${this._name}.${this._id}.s3_destination`)
  }
}

