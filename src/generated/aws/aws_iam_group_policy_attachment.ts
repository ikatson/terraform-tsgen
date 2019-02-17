import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_group_policy_attachment_config {
    group: rstring
    policy_arn: rstring
}

export class aws_iam_group_policy_attachment implements Resource {
    config: aws_iam_group_policy_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_group_policy_attachment"
    private _id: string;
    constructor(id: string, config: aws_iam_group_policy_attachment_config) {
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
    
    get ref_group(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.group`)
    }
    get ref_policy_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy_arn`)
    }
}

