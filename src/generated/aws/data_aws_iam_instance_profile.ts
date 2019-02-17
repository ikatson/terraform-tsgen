import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_instance_profile_config {
    arn?: rstring
    create_date?: rstring
    name: rstring
    path?: rstring
    role_arn?: rstring
    role_id?: rstring
    role_name?: rstring
}

export class data_aws_iam_instance_profile implements Data {
    config: data_aws_iam_instance_profile_config
    private _is_data: boolean = true
    private _name: string = "aws_iam_instance_profile"
    private _id: string;
    constructor(id: string, config: data_aws_iam_instance_profile_config) {
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
    get ref_create_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.create_date`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_path(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.path`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
    get ref_role_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_id`)
  }
    get ref_role_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_name`)
  }
}

