import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_group_config {
    arn?: rstring
    name: rstring
    path?: rstring
    unique_id?: rstring
}

export class aws_iam_group implements Resource {
    config: aws_iam_group_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_group"
    private _id: string;
    constructor(id: string, config: aws_iam_group_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_path(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.path`)
    }
    get ref_unique_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.unique_id`)
    }
}

