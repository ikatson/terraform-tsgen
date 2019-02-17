import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_policy_attachment_config {
    groups?: rstring[]
    name: rstring
    policy_arn: rstring
    roles?: rstring[]
    users?: rstring[]
}

export class data_aws_iam_policy_attachment implements Data {
    config: data_aws_iam_policy_attachment_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iam_policy_attachment"
    private _id: string;
    constructor(id: string, config: data_aws_iam_policy_attachment_config) {
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
    
    get ref_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.groups`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_policy_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy_arn`)
  }
    get ref_roles(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.roles`)
  }
    get ref_users(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.users`)
  }
}

