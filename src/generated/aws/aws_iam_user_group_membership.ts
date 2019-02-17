import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_user_group_membership_config {
    groups: rstring[]
    user: rstring
}

export class aws_iam_user_group_membership implements Resource {
    config: aws_iam_user_group_membership_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_user_group_membership"
    private _id: string;
    constructor(id: string, config: aws_iam_user_group_membership_config) {
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
    get ref_user(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.user`)
    }
}

