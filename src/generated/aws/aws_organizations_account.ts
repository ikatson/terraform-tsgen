import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_organizations_account_config {
    arn?: rstring
    email: rstring
    iam_user_access_to_billing?: rstring
    joined_method?: rstring
    joined_timestamp?: rstring
    name: rstring
    role_name?: rstring
    status?: rstring
}

export class aws_organizations_account implements Resource {
    config: aws_organizations_account_config
    private _is_data: boolean = false
    private _name: string = "aws_organizations_account"
    private _id: string;
    constructor(id: string, config: aws_organizations_account_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_email(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.email`)
    }
    get ref_iam_user_access_to_billing(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.iam_user_access_to_billing`)
    }
    get ref_joined_method(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.joined_method`)
    }
    get ref_joined_timestamp(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.joined_timestamp`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_role_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_name`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
}

