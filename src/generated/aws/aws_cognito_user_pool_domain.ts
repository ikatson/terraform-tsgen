import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cognito_user_pool_domain_config {
    aws_account_id?: rstring
    certificate_arn?: rstring
    cloudfront_distribution_arn?: rstring
    domain: rstring
    s3_bucket?: rstring
    user_pool_id: rstring
    version?: rstring
}

export class aws_cognito_user_pool_domain implements Resource {
    config: aws_cognito_user_pool_domain_config
    private _is_data: boolean = false
    private _name: string = "aws_cognito_user_pool_domain"
    private _id: string;
    constructor(id: string, config: aws_cognito_user_pool_domain_config) {
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
    
    get ref_aws_account_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.aws_account_id`)
    }
    get ref_certificate_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_arn`)
    }
    get ref_cloudfront_distribution_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cloudfront_distribution_arn`)
    }
    get ref_domain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain`)
    }
    get ref_s3_bucket(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_bucket`)
    }
    get ref_user_pool_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.user_pool_id`)
    }
    get ref_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.version`)
    }
}

