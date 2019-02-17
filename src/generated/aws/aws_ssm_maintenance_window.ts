import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ssm_maintenance_window_config {
    allow_unassociated_targets?: rboolean
    cutoff: rnumber
    duration: rnumber
    enabled?: rboolean
    end_date?: rstring
    name: rstring
    schedule: rstring
    schedule_timezone?: rstring
    start_date?: rstring
}

export class aws_ssm_maintenance_window implements Resource {
    config: aws_ssm_maintenance_window_config
    private _is_data: boolean = false
    private _name: string = "aws_ssm_maintenance_window"
    private _id: string;
    constructor(id: string, config: aws_ssm_maintenance_window_config) {
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
    
    get ref_allow_unassociated_targets(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.allow_unassociated_targets`)
    }
    get ref_cutoff(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.cutoff`)
    }
    get ref_duration(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.duration`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_end_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.end_date`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_schedule(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.schedule`)
    }
    get ref_schedule_timezone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.schedule_timezone`)
    }
    get ref_start_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.start_date`)
    }
}

