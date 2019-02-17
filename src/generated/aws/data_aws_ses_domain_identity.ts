import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ses_domain_identity_config {
    arn?: rstring
    domain: rstring
    verification_token?: rstring
}

export class data_aws_ses_domain_identity implements Data {
    config: data_aws_ses_domain_identity_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ses_domain_identity"
    private _id: string;
    constructor(id: string, config: data_aws_ses_domain_identity_config) {
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
    get ref_domain(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.domain`)
  }
    get ref_verification_token(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.verification_token`)
  }
}

