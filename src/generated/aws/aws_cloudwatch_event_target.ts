import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_cloudwatch_event_target__batch_target {
    array_size?: rnumber
    job_attempts?: rnumber
    job_definition: rstring
    job_name: rstring
}

export interface __aws_cloudwatch_event_target__ecs_target__network_configuration {
    assign_public_ip?: rboolean
    security_groups?: rstring[]
    subnets: rstring[]
}

export interface _aws_cloudwatch_event_target__ecs_target {
    group?: rstring
    launch_type?: rstring
    network_configuration?: __aws_cloudwatch_event_target__ecs_target__network_configuration[]
    platform_version?: rstring
    task_count?: rnumber
    task_definition_arn: rstring
}

export interface _aws_cloudwatch_event_target__input_transformer {
    input_paths?: {[propName: string]: rstring}
    input_template: rstring
}

export interface _aws_cloudwatch_event_target__kinesis_target {
    partition_key_path?: rstring
}

export interface _aws_cloudwatch_event_target__run_command_targets {
    key: rstring
    values: rstring[]
}

export interface _aws_cloudwatch_event_target__sqs_target {
    message_group_id?: rstring
}

export interface aws_cloudwatch_event_target_config {
    arn: rstring
    batch_target?: _aws_cloudwatch_event_target__batch_target[]
    ecs_target?: _aws_cloudwatch_event_target__ecs_target[]
    input?: rstring
    input_path?: rstring
    input_transformer?: _aws_cloudwatch_event_target__input_transformer[]
    kinesis_target?: _aws_cloudwatch_event_target__kinesis_target[]
    role_arn?: rstring
    rule: rstring
    run_command_targets?: _aws_cloudwatch_event_target__run_command_targets[]
    sqs_target?: _aws_cloudwatch_event_target__sqs_target[]
    target_id?: rstring
}

export class aws_cloudwatch_event_target implements Resource {
    config: aws_cloudwatch_event_target_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudwatch_event_target"
    private _id: string;
    constructor(id: string, config: aws_cloudwatch_event_target_config) {
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
    get ref_batch_target(): Reference<_aws_cloudwatch_event_target__batch_target[]> {
        return new Reference(`${this._name}.${this._id}.batch_target`)
    }
    get ref_ecs_target(): Reference<_aws_cloudwatch_event_target__ecs_target[]> {
        return new Reference(`${this._name}.${this._id}.ecs_target`)
    }
    get ref_input(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.input`)
    }
    get ref_input_path(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.input_path`)
    }
    get ref_input_transformer(): Reference<_aws_cloudwatch_event_target__input_transformer[]> {
        return new Reference(`${this._name}.${this._id}.input_transformer`)
    }
    get ref_kinesis_target(): Reference<_aws_cloudwatch_event_target__kinesis_target[]> {
        return new Reference(`${this._name}.${this._id}.kinesis_target`)
    }
    get ref_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_arn`)
    }
    get ref_rule(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rule`)
    }
    get ref_run_command_targets(): Reference<_aws_cloudwatch_event_target__run_command_targets[]> {
        return new Reference(`${this._name}.${this._id}.run_command_targets`)
    }
    get ref_sqs_target(): Reference<_aws_cloudwatch_event_target__sqs_target[]> {
        return new Reference(`${this._name}.${this._id}.sqs_target`)
    }
    get ref_target_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.target_id`)
    }
}

