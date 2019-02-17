import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_role_config {
    arn?: rstring
    assume_role_policy?: rstring
    assume_role_policy_document?: rstring
    create_date?: rstring
    description?: rstring
    max_session_duration?: rnumber
    name?: rstring
    path?: rstring
    permissions_boundary?: rstring
    role_id?: rstring
    role_name?: rstring
    unique_id?: rstring
}

export class data_aws_iam_role implements Data {
    config: data_aws_iam_role_config
    private _is_data: boolean = true
    private _name: string = "aws_iam_role"
    private _id: string;
    constructor(id: string, config: data_aws_iam_role_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_assume_role_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.assume_role_policy`)
  }
    get ref_assume_role_policy_document(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.assume_role_policy_document`)
  }
    get ref_create_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.create_date`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_max_session_duration(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.max_session_duration`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_path(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.path`)
  }
    get ref_permissions_boundary(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.permissions_boundary`)
  }
    get ref_role_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_id`)
  }
    get ref_role_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_name`)
  }
    get ref_unique_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.unique_id`)
  }
}

