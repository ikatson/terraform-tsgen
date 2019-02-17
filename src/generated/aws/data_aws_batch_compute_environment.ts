import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_batch_compute_environment_config {
    arn?: rstring
    compute_environment_name: rstring
    ecs_cluster_arn?: rstring
    service_role?: rstring
    state?: rstring
    status?: rstring
    status_reason?: rstring
    type?: rstring
}

export class data_aws_batch_compute_environment implements Data {
    config: data_aws_batch_compute_environment_config
    private _is_data: boolean = true
    private _name: string = "aws_batch_compute_environment"
    private _id: string;
    constructor(id: string, config: data_aws_batch_compute_environment_config) {
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
    get ref_compute_environment_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.compute_environment_name`)
  }
    get ref_ecs_cluster_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ecs_cluster_arn`)
  }
    get ref_service_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_role`)
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
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

