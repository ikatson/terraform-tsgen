import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_config_configuration_recorder__recording_group {
    all_supported?: rboolean
    include_global_resource_types?: rboolean
    resource_types?: rstring[]
}

export interface aws_config_configuration_recorder_config {
    name?: rstring
    recording_group?: _aws_config_configuration_recorder__recording_group[]
    role_arn: rstring
}

export class aws_config_configuration_recorder implements Resource {
    config: aws_config_configuration_recorder_config
    private _is_data: boolean = false
    private _name: string = "aws_config_configuration_recorder"
    private _id: string;
    constructor(id: string, config: aws_config_configuration_recorder_config) {
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
    
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_recording_group(): Reference<_aws_config_configuration_recorder__recording_group[]> {
        return new Reference(`${this._name}.${this._id}.recording_group`)
    }
    get ref_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_arn`)
    }
}

