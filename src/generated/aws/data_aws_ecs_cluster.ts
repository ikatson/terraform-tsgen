import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ecs_cluster_config {
    arn?: rstring
    cluster_name: rstring
    pending_tasks_count?: rnumber
    registered_container_instances_count?: rnumber
    running_tasks_count?: rnumber
    status?: rstring
}

export class data_aws_ecs_cluster implements Data {
    config: data_aws_ecs_cluster_config
    private _is_data: boolean = true
    private _name: string = "aws_ecs_cluster"
    private _id: string;
    constructor(id: string, config: data_aws_ecs_cluster_config) {
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
    get ref_cluster_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_name`)
  }
    get ref_pending_tasks_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.pending_tasks_count`)
  }
    get ref_registered_container_instances_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.registered_container_instances_count`)
  }
    get ref_running_tasks_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.running_tasks_count`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
}

