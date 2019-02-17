import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_kms_secrets__secret {
    context?: {[propName: string]: rstring}
    grant_tokens?: rstring[]
    name: rstring
    payload: rstring
}

export interface data_aws_kms_secrets_config {
    plaintext?: {[propName: string]: rstring}
    secret: _data_aws_kms_secrets__secret[]
}

export class data_aws_kms_secrets implements Data {
    config: data_aws_kms_secrets_config
    private _is_data: boolean = true
    private _name: string = "aws_kms_secrets"
    private _id: string;
    constructor(id: string, config: data_aws_kms_secrets_config) {
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
    
    get ref_plaintext(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.plaintext`)
  }
    get ref_secret(): Reference<_data_aws_kms_secrets__secret[]> {
        return new Reference(`data.${this._name}.${this._id}.secret`)
  }
}

