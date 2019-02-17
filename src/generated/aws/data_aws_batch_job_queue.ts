import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_batch_job_queue__compute_environment_order {
    compute_environment?: rstring
    order?: rnumber
}

export interface data_aws_batch_job_queue_config {
    arn?: rstring
    compute_environment_order?: _data_aws_batch_job_queue__compute_environment_order[]
    name: rstring
    priority?: rnumber
    state?: rstring
    status?: rstring
    status_reason?: rstring
}

export class data_aws_batch_job_queue implements Data {
    config: data_aws_batch_job_queue_config
    private _is_data: boolean = true
    private _name: string = "aws_batch_job_queue"
    private _id: string;
    constructor(id: string, config: data_aws_batch_job_queue_config) {
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
    get ref_compute_environment_order(): Reference<_data_aws_batch_job_queue__compute_environment_order[]> {
        return new Reference(`data.${this._name}.${this._id}.compute_environment_order`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_priority(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.priority`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_status_reason(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status_reason`)
  }
}

