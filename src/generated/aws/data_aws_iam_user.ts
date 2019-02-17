import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_user_config {
    arn?: rstring
    path?: rstring
    permissions_boundary?: rstring
    user_id?: rstring
    user_name: rstring
}

export class data_aws_iam_user implements Data {
    config: data_aws_iam_user_config
    private _is_data: boolean = true
    private _name: string = "aws_iam_user"
    private _id: string;
    constructor(id: string, config: data_aws_iam_user_config) {
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
    get ref_path(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.path`)
  }
    get ref_permissions_boundary(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.permissions_boundary`)
  }
    get ref_user_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_id`)
  }
    get ref_user_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_name`)
  }
}

