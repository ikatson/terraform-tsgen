import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ecs_task_definition_config {
    family?: rstring
    network_mode?: rstring
    revision?: rnumber
    status?: rstring
    task_definition: rstring
    task_role_arn?: rstring
}

export class data_aws_ecs_task_definition implements Data {
    config: data_aws_ecs_task_definition_config
    private _is_data: boolean = true
    private _name: string = "aws_ecs_task_definition"
    private _id: string;
    constructor(id: string, config: data_aws_ecs_task_definition_config) {
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
    
    get ref_family(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.family`)
  }
    get ref_network_mode(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_mode`)
  }
    get ref_revision(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.revision`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_task_definition(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.task_definition`)
  }
    get ref_task_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.task_role_arn`)
  }
}

