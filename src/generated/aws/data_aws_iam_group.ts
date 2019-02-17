import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_group_config {
    arn?: rstring
    group_id?: rstring
    group_name: rstring
    path?: rstring
}

export class data_aws_iam_group implements Data {
    config: data_aws_iam_group_config
    private _is_data: boolean = true
    private _name: string = "aws_iam_group"
    private _id: string;
    constructor(id: string, config: data_aws_iam_group_config) {
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
    get ref_group_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.group_id`)
  }
    get ref_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.group_name`)
  }
    get ref_path(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.path`)
  }
}

