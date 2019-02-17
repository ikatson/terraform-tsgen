import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_acmpca_certificate_authority__certificate_authority_configuration__subject {
    common_name?: rstring
    country?: rstring
    distinguished_name_qualifier?: rstring
    generation_qualifier?: rstring
    given_name?: rstring
    initials?: rstring
    locality?: rstring
    organization?: rstring
    organizational_unit?: rstring
    pseudonym?: rstring
    state?: rstring
    surname?: rstring
    title?: rstring
}

export interface _aws_acmpca_certificate_authority__certificate_authority_configuration {
    key_algorithm: rstring
    signing_algorithm: rstring
    subject: __aws_acmpca_certificate_authority__certificate_authority_configuration__subject[]
}

export interface __aws_acmpca_certificate_authority__revocation_configuration__crl_configuration {
    custom_cname?: rstring
    enabled?: rboolean
    expiration_in_days: rnumber
    s3_bucket_name?: rstring
}

export interface _aws_acmpca_certificate_authority__revocation_configuration {
    crl_configuration?: __aws_acmpca_certificate_authority__revocation_configuration__crl_configuration[]
}

export interface aws_acmpca_certificate_authority_config {
    arn?: rstring
    certificate?: rstring
    certificate_authority_configuration: _aws_acmpca_certificate_authority__certificate_authority_configuration[]
    certificate_chain?: rstring
    certificate_signing_request?: rstring
    enabled?: rboolean
    not_after?: rstring
    not_before?: rstring
    revocation_configuration?: _aws_acmpca_certificate_authority__revocation_configuration[]
    serial?: rstring
    status?: rstring
    tags?: {[propName: string]: rstring}
    type?: rstring
}

export class aws_acmpca_certificate_authority implements Resource {
    config: aws_acmpca_certificate_authority_config
    private _is_data: boolean = false
    private _name: string = "aws_acmpca_certificate_authority"
    private _id: string;
    constructor(id: string, config: aws_acmpca_certificate_authority_config) {
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
    get ref_certificate(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate`)
    }
    get ref_certificate_authority_configuration(): Reference<_aws_acmpca_certificate_authority__certificate_authority_configuration[]> {
        return new Reference(`${this._name}.${this._id}.certificate_authority_configuration`)
    }
    get ref_certificate_chain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_chain`)
    }
    get ref_certificate_signing_request(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_signing_request`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_not_after(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.not_after`)
    }
    get ref_not_before(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.not_before`)
    }
    get ref_revocation_configuration(): Reference<_aws_acmpca_certificate_authority__revocation_configuration[]> {
        return new Reference(`${this._name}.${this._id}.revocation_configuration`)
    }
    get ref_serial(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.serial`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
}

