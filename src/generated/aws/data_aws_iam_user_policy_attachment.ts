import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_user_policy_attachment_config {
    policy_arn: rstring
    user: rstring
}

export class data_aws_iam_user_policy_attachment implements Data {
    config: data_aws_iam_user_policy_attachment_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iam_user_policy_attachment"
    private _id: string;
    constructor(id: string, config: data_aws_iam_user_policy_attachment_config) {
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
    
    get ref_policy_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy_arn`)
  }
    get ref_user(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user`)
  }
}

