import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_ssm_maintenance_window_target__targets {
    key: rstring
    values: rstring[]
}

export interface data_aws_ssm_maintenance_window_target_config {
    owner_information?: rstring
    resource_type: rstring
    targets: _data_aws_ssm_maintenance_window_target__targets[]
    window_id: rstring
}

export class data_aws_ssm_maintenance_window_target implements Data {
    config: data_aws_ssm_maintenance_window_target_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ssm_maintenance_window_target"
    private _id: string;
    constructor(id: string, config: data_aws_ssm_maintenance_window_target_config) {
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
        return new Reference(`data.${this._name}.${this._id}.owner_information`)
  }
    get ref_resource_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.resource_type`)
  }
    get ref_targets(): Reference<_data_aws_ssm_maintenance_window_target__targets[]> {
        return new Reference(`data.${this._name}.${this._id}.targets`)
  }
    get ref_window_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.window_id`)
  }
}

