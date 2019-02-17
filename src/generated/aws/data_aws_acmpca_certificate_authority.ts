import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_acmpca_certificate_authority__revocation_configuration__crl_configuration {
    custom_cname?: rstring
    enabled?: rboolean
    expiration_in_days?: rnumber
    s3_bucket_name?: rstring
}

export interface _data_aws_acmpca_certificate_authority__revocation_configuration {
    crl_configuration?: __data_aws_acmpca_certificate_authority__revocation_configuration__crl_configuration[]
}

export interface data_aws_acmpca_certificate_authority_config {
    arn: rstring
    certificate?: rstring
    certificate_chain?: rstring
    certificate_signing_request?: rstring
    not_after?: rstring
    not_before?: rstring
    revocation_configuration?: _data_aws_acmpca_certificate_authority__revocation_configuration[]
    serial?: rstring
    status?: rstring
    tags?: {[propName: string]: rstring}
    type?: rstring
}

export class data_aws_acmpca_certificate_authority implements Data {
    config: data_aws_acmpca_certificate_authority_config
    private _is_data: boolean = true
    private _name: string = "aws_acmpca_certificate_authority"
    private _id: string;
    constructor(id: string, config: data_aws_acmpca_certificate_authority_config) {
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
    get ref_certificate(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.certificate`)
  }
    get ref_certificate_chain(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.certificate_chain`)
  }
    get ref_certificate_signing_request(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.certificate_signing_request`)
  }
    get ref_not_after(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.not_after`)
  }
    get ref_not_before(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.not_before`)
  }
    get ref_revocation_configuration(): Reference<_data_aws_acmpca_certificate_authority__revocation_configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.revocation_configuration`)
  }
    get ref_serial(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.serial`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

