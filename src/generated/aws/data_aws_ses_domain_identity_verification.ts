import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ses_domain_identity_verification_config {
    arn?: rstring
    domain: rstring
}

export class data_aws_ses_domain_identity_verification implements Data {
    config: data_aws_ses_domain_identity_verification_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ses_domain_identity_verification"
    private _id: string;
    constructor(id: string, config: data_aws_ses_domain_identity_verification_config) {
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
}

