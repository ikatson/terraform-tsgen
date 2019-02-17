import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_config_configuration_recorder_status_config {
    is_enabled: rboolean
    name: rstring
}

export class data_aws_config_configuration_recorder_status implements Data {
    config: data_aws_config_configuration_recorder_status_config
    private _is_data: boolean = true
    private _name: string = "data_aws_config_configuration_recorder_status"
    private _id: string;
    constructor(id: string, config: data_aws_config_configuration_recorder_status_config) {
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
    
    get ref_is_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.is_enabled`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

