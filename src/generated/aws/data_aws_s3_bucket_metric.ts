import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_s3_bucket_metric__filter {
    prefix?: rstring
    tags?: {[propName: string]: rstring}
}

export interface data_aws_s3_bucket_metric_config {
    bucket: rstring
    filter?: _data_aws_s3_bucket_metric__filter[]
    name: rstring
}

export class data_aws_s3_bucket_metric implements Data {
    config: data_aws_s3_bucket_metric_config
    private _is_data: boolean = true
    private _name: string = "data_aws_s3_bucket_metric"
    private _id: string;
    constructor(id: string, config: data_aws_s3_bucket_metric_config) {
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
    get ref_filter(): Reference<_data_aws_s3_bucket_metric__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

