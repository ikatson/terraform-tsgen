import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_neptune_parameter_group__parameter {
    apply_method?: rstring
    name: rstring
    value: rstring
}

export interface data_aws_neptune_parameter_group_config {
    arn?: rstring
    description?: rstring
    family: rstring
    name: rstring
    parameter?: _data_aws_neptune_parameter_group__parameter[]
    tags?: {[propName: string]: rstring}
}

export class data_aws_neptune_parameter_group implements Data {
    config: data_aws_neptune_parameter_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_neptune_parameter_group"
    private _id: string;
    constructor(id: string, config: data_aws_neptune_parameter_group_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_family(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.family`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_parameter(): Reference<_data_aws_neptune_parameter_group__parameter[]> {
        return new Reference(`data.${this._name}.${this._id}.parameter`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

