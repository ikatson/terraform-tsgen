import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_autoscaling_schedule_config {
    arn?: rstring
    autoscaling_group_name: rstring
    desired_capacity?: rnumber
    end_time?: rstring
    max_size?: rnumber
    min_size?: rnumber
    recurrence?: rstring
    scheduled_action_name: rstring
    start_time?: rstring
}

export class aws_autoscaling_schedule implements Resource {
    config: aws_autoscaling_schedule_config
    private _is_data: boolean = false
    private _name: string = "aws_autoscaling_schedule"
    private _id: string;
    constructor(id: string, config: aws_autoscaling_schedule_config) {
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
    get ref_autoscaling_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.autoscaling_group_name`)
    }
    get ref_desired_capacity(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.desired_capacity`)
    }
    get ref_end_time(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.end_time`)
    }
    get ref_max_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.max_size`)
    }
    get ref_min_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.min_size`)
    }
    get ref_recurrence(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.recurrence`)
    }
    get ref_scheduled_action_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.scheduled_action_name`)
    }
    get ref_start_time(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.start_time`)
    }
}

