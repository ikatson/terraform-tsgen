import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_role_config {
    arn?: rstring
    assume_role_policy: rstring
    create_date?: rstring
    description?: rstring
    force_detach_policies?: rboolean
    max_session_duration?: rnumber
    name?: rstring
    name_prefix?: rstring
    path?: rstring
    permissions_boundary?: rstring
    tags?: {[propName: string]: rstring}
    unique_id?: rstring
}

export class aws_iam_role implements Resource {
    config: aws_iam_role_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_role"
    private _id: string;
    constructor(id: string, config: aws_iam_role_config) {
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
    get ref_assume_role_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.assume_role_policy`)
    }
    get ref_create_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.create_date`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_force_detach_policies(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.force_detach_policies`)
    }
    get ref_max_session_duration(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.max_session_duration`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
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

