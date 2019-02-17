import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ssm_patch_group_config {
    baseline_id: rstring
    patch_group: rstring
}

export class aws_ssm_patch_group implements Resource {
    config: aws_ssm_patch_group_config
    private _is_data: boolean = false
    private _name: string = "aws_ssm_patch_group"
    private _id: string;
    constructor(id: string, config: aws_ssm_patch_group_config) {
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
        return new Reference(`${this._name}.${this._id}.baseline_id`)
    }
    get ref_patch_group(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.patch_group`)
    }
}

