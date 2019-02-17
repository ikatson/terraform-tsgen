import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_kms_secret__secret {
    context?: {[propName: string]: rstring}
    grant_tokens?: rstring[]
    name: rstring
    payload: rstring
}

export interface data_aws_kms_secret_config {
    __has_dynamic_attributes?: rstring
    secret: _data_aws_kms_secret__secret[]
}

export class data_aws_kms_secret implements Data {
    config: data_aws_kms_secret_config
    private _is_data: boolean = true
    private _name: string = "aws_kms_secret"
    private _id: string;
    constructor(id: string, config: data_aws_kms_secret_config) {
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
    
    get ref___has_dynamic_attributes(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.__has_dynamic_attributes`)
  }
    get ref_secret(): Reference<_data_aws_kms_secret__secret[]> {
        return new Reference(`data.${this._name}.${this._id}.secret`)
  }
}

