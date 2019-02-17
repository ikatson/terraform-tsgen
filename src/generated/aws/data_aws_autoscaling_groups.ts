import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_autoscaling_groups__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_autoscaling_groups_config {
    arns?: rstring[]
    filter?: _data_aws_autoscaling_groups__filter[]
    names?: rstring[]
}

export class data_aws_autoscaling_groups implements Data {
    config: data_aws_autoscaling_groups_config
    private _is_data: boolean = true
    private _name: string = "aws_autoscaling_groups"
    private _id: string;
    constructor(id: string, config: data_aws_autoscaling_groups_config) {
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
    
    get ref_arns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.arns`)
  }
    get ref_filter(): Reference<_data_aws_autoscaling_groups__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_names(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.names`)
  }
}

