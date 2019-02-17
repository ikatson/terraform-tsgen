import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_policy_attachment_config {
    groups?: rstring[]
    name: rstring
    policy_arn: rstring
    roles?: rstring[]
    users?: rstring[]
}

export class aws_iam_policy_attachment implements Resource {
    config: aws_iam_policy_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_policy_attachment"
    private _id: string;
    constructor(id: string, config: aws_iam_policy_attachment_config) {
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
        return new Reference(`${this._name}.${this._id}.groups`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_policy_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy_arn`)
    }
    get ref_roles(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.roles`)
    }
    get ref_users(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.users`)
    }
}

