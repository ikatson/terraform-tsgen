import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_s3_bucket_config {
    arn?: rstring
    bucket: rstring
    bucket_domain_name?: rstring
    hosted_zone_id?: rstring
    region?: rstring
    website_domain?: rstring
    website_endpoint?: rstring
}

export class data_aws_s3_bucket implements Data {
    config: data_aws_s3_bucket_config
    private _is_data: boolean = true
    private _name: string = "aws_s3_bucket"
    private _id: string;
    constructor(id: string, config: data_aws_s3_bucket_config) {
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
    get ref_bucket(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bucket`)
  }
    get ref_bucket_domain_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bucket_domain_name`)
  }
    get ref_hosted_zone_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.hosted_zone_id`)
  }
    get ref_region(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.region`)
  }
    get ref_website_domain(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.website_domain`)
  }
    get ref_website_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.website_endpoint`)
  }
}

