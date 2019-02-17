import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_cloudfront_origin_access_identity_config {
    caller_reference?: rstring
    cloudfront_access_identity_path?: rstring
    comment?: rstring
    etag?: rstring
    iam_arn?: rstring
    s3_canonical_user_id?: rstring
}

export class data_aws_cloudfront_origin_access_identity implements Data {
    config: data_aws_cloudfront_origin_access_identity_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cloudfront_origin_access_identity"
    private _id: string;
    constructor(id: string, config: data_aws_cloudfront_origin_access_identity_config) {
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
    
    get ref_caller_reference(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.caller_reference`)
  }
    get ref_cloudfront_access_identity_path(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cloudfront_access_identity_path`)
  }
    get ref_comment(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.comment`)
  }
    get ref_etag(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.etag`)
  }
    get ref_iam_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.iam_arn`)
  }
    get ref_s3_canonical_user_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.s3_canonical_user_id`)
  }
}

