import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_appautoscaling_target_config {
    max_capacity: rnumber
    min_capacity: rnumber
    resource_id: rstring
    role_arn?: rstring
    scalable_dimension: rstring
    service_namespace: rstring
}

export class data_aws_appautoscaling_target implements Data {
    config: data_aws_appautoscaling_target_config
    private _is_data: boolean = true
    private _name: string = "data_aws_appautoscaling_target"
    private _id: string;
    constructor(id: string, config: data_aws_appautoscaling_target_config) {
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
    
    get ref_max_capacity(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.max_capacity`)
  }
    get ref_min_capacity(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.min_capacity`)
  }
    get ref_resource_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.resource_id`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
    get ref_scalable_dimension(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.scalable_dimension`)
  }
    get ref_service_namespace(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_namespace`)
  }
}

