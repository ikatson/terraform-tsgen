import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_group_membership_config {
    group: rstring
    name: rstring
    users: rstring[]
}

export class data_aws_iam_group_membership implements Data {
    config: data_aws_iam_group_membership_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iam_group_membership"
    private _id: string;
    constructor(id: string, config: data_aws_iam_group_membership_config) {
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
        return new Reference(`data.${this._name}.${this._id}.group`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_users(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.users`)
  }
}

