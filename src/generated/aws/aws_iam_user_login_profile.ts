import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_user_login_profile_config {
    encrypted_password?: rstring
    key_fingerprint?: rstring
    password_length?: rnumber
    password_reset_required?: rboolean
    pgp_key: rstring
    user: rstring
}

export class aws_iam_user_login_profile implements Resource {
    config: aws_iam_user_login_profile_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_user_login_profile"
    private _id: string;
    constructor(id: string, config: aws_iam_user_login_profile_config) {
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
    
    get ref_encrypted_password(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.encrypted_password`)
    }
    get ref_key_fingerprint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_fingerprint`)
    }
    get ref_password_length(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.password_length`)
    }
    get ref_password_reset_required(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.password_reset_required`)
    }
    get ref_pgp_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.pgp_key`)
    }
    get ref_user(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.user`)
    }
}

