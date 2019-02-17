import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_group_policy_config {
    group: rstring
    name?: rstring
    name_prefix?: rstring
    policy: rstring
}

export class aws_iam_group_policy implements Resource {
    config: aws_iam_group_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_group_policy"
    private _id: string;
    constructor(id: string, config: aws_iam_group_policy_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
}

