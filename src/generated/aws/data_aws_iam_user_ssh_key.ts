import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_user_ssh_key_config {
    encoding: rstring
    fingerprint?: rstring
    public_key: rstring
    ssh_public_key_id?: rstring
    status?: rstring
    username: rstring
}

export class data_aws_iam_user_ssh_key implements Data {
    config: data_aws_iam_user_ssh_key_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iam_user_ssh_key"
    private _id: string;
    constructor(id: string, config: data_aws_iam_user_ssh_key_config) {
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
    
    get ref_encoding(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.encoding`)
  }
    get ref_fingerprint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.fingerprint`)
  }
    get ref_public_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.public_key`)
  }
    get ref_ssh_public_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ssh_public_key_id`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_username(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.username`)
  }
}

