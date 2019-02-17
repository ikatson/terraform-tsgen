import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_datasync_location_s3__s3_config {
    bucket_access_role_arn: rstring
}

export interface data_aws_datasync_location_s3_config {
    arn?: rstring
    s3_bucket_arn: rstring
    s3_config: _data_aws_datasync_location_s3__s3_config[]
    subdirectory: rstring
    tags?: {[propName: string]: rstring}
    uri?: rstring
}

export class data_aws_datasync_location_s3 implements Data {
    config: data_aws_datasync_location_s3_config
    private _is_data: boolean = true
    private _name: string = "data_aws_datasync_location_s3"
    private _id: string;
    constructor(id: string, config: data_aws_datasync_location_s3_config) {
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
    get ref_s3_bucket_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.s3_bucket_arn`)
  }
    get ref_s3_config(): Reference<_data_aws_datasync_location_s3__s3_config[]> {
        return new Reference(`data.${this._name}.${this._id}.s3_config`)
  }
    get ref_subdirectory(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subdirectory`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_uri(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.uri`)
  }
}

