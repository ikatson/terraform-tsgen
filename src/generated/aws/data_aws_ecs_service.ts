import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ecs_service_config {
    arn?: rstring
    cluster_arn: rstring
    desired_count?: rnumber
    launch_type?: rstring
    scheduling_strategy?: rstring
    service_name: rstring
    task_definition?: rstring
}

export class data_aws_ecs_service implements Data {
    config: data_aws_ecs_service_config
    private _is_data: boolean = true
    private _name: string = "aws_ecs_service"
    private _id: string;
    constructor(id: string, config: data_aws_ecs_service_config) {
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
    get ref_cluster_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_arn`)
  }
    get ref_desired_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.desired_count`)
  }
    get ref_launch_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.launch_type`)
  }
    get ref_scheduling_strategy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.scheduling_strategy`)
  }
    get ref_service_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_name`)
  }
    get ref_task_definition(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.task_definition`)
  }
}

