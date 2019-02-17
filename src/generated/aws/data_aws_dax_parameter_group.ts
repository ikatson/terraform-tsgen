import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_dax_parameter_group__parameters {
    name: rstring
    value: rstring
}

export interface data_aws_dax_parameter_group_config {
    description?: rstring
    name: rstring
    parameters?: _data_aws_dax_parameter_group__parameters[]
}

export class data_aws_dax_parameter_group implements Data {
    config: data_aws_dax_parameter_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_dax_parameter_group"
    private _id: string;
    constructor(id: string, config: data_aws_dax_parameter_group_config) {
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
    
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_parameters(): Reference<_data_aws_dax_parameter_group__parameters[]> {
        return new Reference(`data.${this._name}.${this._id}.parameters`)
  }
}

