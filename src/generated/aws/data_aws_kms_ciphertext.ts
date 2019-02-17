import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_kms_ciphertext_config {
    ciphertext_blob?: rstring
    context?: {[propName: string]: rstring}
    key_id: rstring
    plaintext: rstring
}

export class data_aws_kms_ciphertext implements Data {
    config: data_aws_kms_ciphertext_config
    private _is_data: boolean = true
    private _name: string = "aws_kms_ciphertext"
    private _id: string;
    constructor(id: string, config: data_aws_kms_ciphertext_config) {
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
    
    get ref_ciphertext_blob(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ciphertext_blob`)
  }
    get ref_context(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.context`)
  }
    get ref_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_id`)
  }
    get ref_plaintext(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.plaintext`)
  }
}

