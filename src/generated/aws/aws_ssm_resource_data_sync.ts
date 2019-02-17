import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ssm_resource_data_sync__s3_destination {
    bucket_name: rstring
    kms_key_arn?: rstring
    prefix?: rstring
    region: rstring
    sync_format?: rstring
}

export interface aws_ssm_resource_data_sync_config {
    name: rstring
    s3_destination: _aws_ssm_resource_data_sync__s3_destination[]
}

export class aws_ssm_resource_data_sync implements Resource {
    config: aws_ssm_resource_data_sync_config
    private _is_data: boolean = false
    private _name: string = "aws_ssm_resource_data_sync"
    private _id: string;
    constructor(id: string, config: aws_ssm_resource_data_sync_config) {
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
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_s3_destination(): Reference<_aws_ssm_resource_data_sync__s3_destination[]> {
        return new Reference(`${this._name}.${this._id}.s3_destination`)
    }
}

