import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_api_gateway_domain_name__endpoint_configuration {
    types: rstring[]
}

export interface aws_api_gateway_domain_name_config {
    certificate_arn?: rstring
    certificate_body?: rstring
    certificate_chain?: rstring
    certificate_name?: rstring
    certificate_private_key?: rstring
    certificate_upload_date?: rstring
    cloudfront_domain_name?: rstring
    cloudfront_zone_id?: rstring
    domain_name: rstring
    endpoint_configuration?: _aws_api_gateway_domain_name__endpoint_configuration[]
    regional_certificate_arn?: rstring
    regional_certificate_name?: rstring
    regional_domain_name?: rstring
    regional_zone_id?: rstring
}

export class aws_api_gateway_domain_name implements Resource {
    config: aws_api_gateway_domain_name_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_domain_name"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_domain_name_config) {
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
    
    get ref_certificate_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_arn`)
    }
    get ref_certificate_body(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_body`)
    }
    get ref_certificate_chain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_chain`)
    }
    get ref_certificate_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_name`)
    }
    get ref_certificate_private_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_private_key`)
    }
    get ref_certificate_upload_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_upload_date`)
    }
    get ref_cloudfront_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cloudfront_domain_name`)
    }
    get ref_cloudfront_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cloudfront_zone_id`)
    }
    get ref_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain_name`)
    }
    get ref_endpoint_configuration(): Reference<_aws_api_gateway_domain_name__endpoint_configuration[]> {
        return new Reference(`${this._name}.${this._id}.endpoint_configuration`)
    }
    get ref_regional_certificate_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.regional_certificate_arn`)
    }
    get ref_regional_certificate_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.regional_certificate_name`)
    }
    get ref_regional_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.regional_domain_name`)
    }
    get ref_regional_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.regional_zone_id`)
    }
}

