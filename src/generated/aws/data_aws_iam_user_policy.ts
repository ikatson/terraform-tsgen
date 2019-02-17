import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_user_policy_config {
    name?: rstring
    name_prefix?: rstring
    policy: rstring
    user: rstring
}

export class data_aws_iam_user_policy implements Data {
    config: data_aws_iam_user_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iam_user_policy"
    private _id: string;
    constructor(id: string, config: data_aws_iam_user_policy_config) {
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
    
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_prefix`)
  }
    get ref_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy`)
  }
    get ref_user(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user`)
  }
}

