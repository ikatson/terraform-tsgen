import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_user_config {
    arn?: rstring
    /**
     * Delete user even if it has non-Terraform-managed IAM access keys, login profile or MFA devices    
     */
    force_destroy?: rboolean
    name: rstring
    path?: rstring
    permissions_boundary?: rstring
    tags?: {[propName: string]: rstring}
    unique_id?: rstring
}

export class aws_iam_user implements Resource {
    config: aws_iam_user_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_user"
    private _id: string;
    constructor(id: string, config: aws_iam_user_config) {
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
    get ref_force_destroy(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.force_destroy`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_path(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.path`)
    }
    get ref_permissions_boundary(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.permissions_boundary`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_unique_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.unique_id`)
    }
}

