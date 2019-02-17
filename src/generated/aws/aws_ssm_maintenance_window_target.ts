import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ssm_maintenance_window_target__targets {
    key: rstring
    values: rstring[]
}

export interface aws_ssm_maintenance_window_target_config {
    owner_information?: rstring
    resource_type: rstring
    targets: _aws_ssm_maintenance_window_target__targets[]
    window_id: rstring
}

export class aws_ssm_maintenance_window_target implements Resource {
    config: aws_ssm_maintenance_window_target_config
    private _is_data: boolean = false
    private _name: string = "aws_ssm_maintenance_window_target"
    private _id: string;
    constructor(id: string, config: aws_ssm_maintenance_window_target_config) {
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
    
    get ref_owner_information(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner_information`)
    }
    get ref_resource_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_type`)
    }
    get ref_targets(): Reference<_aws_ssm_maintenance_window_target__targets[]> {
        return new Reference(`${this._name}.${this._id}.targets`)
    }
    get ref_window_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.window_id`)
    }
}

