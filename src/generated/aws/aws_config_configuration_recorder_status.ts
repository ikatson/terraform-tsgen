import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_config_configuration_recorder_status_config {
    is_enabled: rboolean
    name: rstring
}

export class aws_config_configuration_recorder_status implements Resource {
    config: aws_config_configuration_recorder_status_config
    private _is_data: boolean = false
    private _name: string = "aws_config_configuration_recorder_status"
    private _id: string;
    constructor(id: string, config: aws_config_configuration_recorder_status_config) {
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
        return new Reference(`${this._name}.${this._id}.is_enabled`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

