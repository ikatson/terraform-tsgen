import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_acm_certificate__domain_validation_options {
    domain_name?: rstring
    resource_record_name?: rstring
    resource_record_type?: rstring
    resource_record_value?: rstring
}

export interface aws_acm_certificate_config {
    arn?: rstring
    certificate_body?: rstring
    certificate_chain?: rstring
    domain_name?: rstring
    domain_validation_options?: _aws_acm_certificate__domain_validation_options[]
    private_key?: rstring
    subject_alternative_names?: rstring[]
    tags?: {[propName: string]: rstring}
    validation_emails?: rstring[]
    validation_method?: rstring
}

export class aws_acm_certificate implements Resource {
    config: aws_acm_certificate_config
    private _is_data: boolean = false
    private _name: string = "aws_acm_certificate"
    private _id: string;
    constructor(id: string, config: aws_acm_certificate_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_certificate_body(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_body`)
    }
    get ref_certificate_chain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_chain`)
    }
    get ref_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain_name`)
    }
    get ref_domain_validation_options(): Reference<_aws_acm_certificate__domain_validation_options[]> {
        return new Reference(`${this._name}.${this._id}.domain_validation_options`)
    }
    get ref_private_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.private_key`)
    }
    get ref_subject_alternative_names(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.subject_alternative_names`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_validation_emails(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.validation_emails`)
    }
    get ref_validation_method(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.validation_method`)
    }
}

