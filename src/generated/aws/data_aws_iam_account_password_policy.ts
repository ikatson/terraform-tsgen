import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_account_password_policy_config {
    allow_users_to_change_password?: rboolean
    expire_passwords?: rboolean
    hard_expiry?: rboolean
    max_password_age?: rnumber
    minimum_password_length?: rnumber
    password_reuse_prevention?: rnumber
    require_lowercase_characters?: rboolean
    require_numbers?: rboolean
    require_symbols?: rboolean
    require_uppercase_characters?: rboolean
}

export class data_aws_iam_account_password_policy implements Data {
    config: data_aws_iam_account_password_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iam_account_password_policy"
    private _id: string;
    constructor(id: string, config: data_aws_iam_account_password_policy_config) {
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
    
    get ref_allow_users_to_change_password(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.allow_users_to_change_password`)
  }
    get ref_expire_passwords(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.expire_passwords`)
  }
    get ref_hard_expiry(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.hard_expiry`)
  }
    get ref_max_password_age(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.max_password_age`)
  }
    get ref_minimum_password_length(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.minimum_password_length`)
  }
    get ref_password_reuse_prevention(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.password_reuse_prevention`)
  }
    get ref_require_lowercase_characters(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.require_lowercase_characters`)
  }
    get ref_require_numbers(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.require_numbers`)
  }
    get ref_require_symbols(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.require_symbols`)
  }
    get ref_require_uppercase_characters(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.require_uppercase_characters`)
  }
}

