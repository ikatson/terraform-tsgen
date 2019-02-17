import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_role_policy_attachment_config {
    policy_arn: rstring
    role: rstring
}

export class aws_iam_role_policy_attachment implements Resource {
    config: aws_iam_role_policy_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_role_policy_attachment"
    private _id: string;
    constructor(id: string, config: aws_iam_role_policy_attachment_config) {
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
        return new Reference(`${this._name}.${this._id}.policy_arn`)
    }
    get ref_role(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role`)
    }
}

