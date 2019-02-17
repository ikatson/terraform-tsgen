import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_access_key_config {
    encrypted_secret?: rstring
    key_fingerprint?: rstring
    pgp_key?: rstring
    secret?: rstring
    ses_smtp_password?: rstring
    status?: rstring
    user: rstring
}

export class data_aws_iam_access_key implements Data {
    config: data_aws_iam_access_key_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iam_access_key"
    private _id: string;
    constructor(id: string, config: data_aws_iam_access_key_config) {
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
    
    get ref_encrypted_secret(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.encrypted_secret`)
  }
    get ref_key_fingerprint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_fingerprint`)
  }
    get ref_pgp_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.pgp_key`)
  }
    get ref_secret(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.secret`)
  }
    get ref_ses_smtp_password(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ses_smtp_password`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_user(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user`)
  }
}

