import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_s3_bucket_metric__filter {
    prefix?: rstring
    tags?: {[propName: string]: rstring}
}

export interface aws_s3_bucket_metric_config {
    bucket: rstring
    filter?: _aws_s3_bucket_metric__filter[]
    name: rstring
}

export class aws_s3_bucket_metric implements Resource {
    config: aws_s3_bucket_metric_config
    private _is_data: boolean = false
    private _name: string = "aws_s3_bucket_metric"
    private _id: string;
    constructor(id: string, config: aws_s3_bucket_metric_config) {
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
        return new Reference(`${this._name}.${this._id}.bucket`)
    }
    get ref_filter(): Reference<_aws_s3_bucket_metric__filter[]> {
        return new Reference(`${this._name}.${this._id}.filter`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

