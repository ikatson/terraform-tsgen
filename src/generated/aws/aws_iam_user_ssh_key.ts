import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_user_ssh_key_config {
    encoding: rstring
    fingerprint?: rstring
    public_key: rstring
    ssh_public_key_id?: rstring
    status?: rstring
    username: rstring
}

export class aws_iam_user_ssh_key implements Resource {
    config: aws_iam_user_ssh_key_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_user_ssh_key"
    private _id: string;
    constructor(id: string, config: aws_iam_user_ssh_key_config) {
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
        return new Reference(`${this._name}.${this._id}.encoding`)
    }
    get ref_fingerprint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.fingerprint`)
    }
    get ref_public_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.public_key`)
    }
    get ref_ssh_public_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ssh_public_key_id`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_username(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.username`)
    }
}

