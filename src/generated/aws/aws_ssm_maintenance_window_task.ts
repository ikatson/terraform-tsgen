import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ssm_maintenance_window_task__logging_info {
    s3_bucket_name: rstring
    s3_bucket_prefix?: rstring
    s3_region: rstring
}

export interface _aws_ssm_maintenance_window_task__targets {
    key: rstring
    values: rstring[]
}

export interface _aws_ssm_maintenance_window_task__task_parameters {
    name: rstring
    values: rstring[]
}

export interface aws_ssm_maintenance_window_task_config {
    description?: rstring
    logging_info?: _aws_ssm_maintenance_window_task__logging_info[]
    max_concurrency: rstring
    max_errors: rstring
    name?: rstring
    priority?: rnumber
    service_role_arn: rstring
    targets: _aws_ssm_maintenance_window_task__targets[]
    task_arn: rstring
    task_parameters?: _aws_ssm_maintenance_window_task__task_parameters[]
    task_type: rstring
    window_id: rstring
}

export class aws_ssm_maintenance_window_task implements Resource {
    config: aws_ssm_maintenance_window_task_config
    private _is_data: boolean = false
    private _name: string = "aws_ssm_maintenance_window_task"
    private _id: string;
    constructor(id: string, config: aws_ssm_maintenance_window_task_config) {
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
    
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_logging_info(): Reference<_aws_ssm_maintenance_window_task__logging_info[]> {
        return new Reference(`${this._name}.${this._id}.logging_info`)
    }
    get ref_max_concurrency(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.max_concurrency`)
    }
    get ref_max_errors(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.max_errors`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_priority(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.priority`)
    }
    get ref_service_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.service_role_arn`)
    }
    get ref_targets(): Reference<_aws_ssm_maintenance_window_task__targets[]> {
        return new Reference(`${this._name}.${this._id}.targets`)
    }
    get ref_task_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.task_arn`)
    }
    get ref_task_parameters(): Reference<_aws_ssm_maintenance_window_task__task_parameters[]> {
        return new Reference(`${this._name}.${this._id}.task_parameters`)
    }
    get ref_task_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.task_type`)
    }
    get ref_window_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.window_id`)
    }
}

