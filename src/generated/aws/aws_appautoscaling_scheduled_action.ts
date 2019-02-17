import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_appautoscaling_scheduled_action__scalable_target_action {
    max_capacity?: rnumber
    min_capacity?: rnumber
}

export interface aws_appautoscaling_scheduled_action_config {
    arn?: rstring
    end_time?: rstring
    name: rstring
    resource_id: rstring
    scalable_dimension?: rstring
    scalable_target_action?: _aws_appautoscaling_scheduled_action__scalable_target_action[]
    schedule?: rstring
    service_namespace: rstring
    start_time?: rstring
}

export class aws_appautoscaling_scheduled_action implements Resource {
    config: aws_appautoscaling_scheduled_action_config
    private _is_data: boolean = false
    private _name: string = "aws_appautoscaling_scheduled_action"
    private _id: string;
    constructor(id: string, config: aws_appautoscaling_scheduled_action_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_end_time(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.end_time`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_resource_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_id`)
    }
    get ref_scalable_dimension(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.scalable_dimension`)
    }
    get ref_scalable_target_action(): Reference<_aws_appautoscaling_scheduled_action__scalable_target_action[]> {
        return new Reference(`${this._name}.${this._id}.scalable_target_action`)
    }
    get ref_schedule(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.schedule`)
    }
    get ref_service_namespace(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.service_namespace`)
    }
    get ref_start_time(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.start_time`)
    }
}

