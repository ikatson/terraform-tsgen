import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ssm_patch_group_config {
    baseline_id: rstring
    patch_group: rstring
}

export class data_aws_ssm_patch_group implements Data {
    config: data_aws_ssm_patch_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ssm_patch_group"
    private _id: string;
    constructor(id: string, config: data_aws_ssm_patch_group_config) {
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
    
    get ref_baseline_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.baseline_id`)
  }
    get ref_patch_group(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.patch_group`)
  }
}

