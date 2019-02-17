import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_sns_topic_config {
    application_failure_feedback_role_arn?: rstring
    application_success_feedback_role_arn?: rstring
    application_success_feedback_sample_rate?: rnumber
    arn?: rstring
    delivery_policy?: rstring
    display_name?: rstring
    http_failure_feedback_role_arn?: rstring
    http_success_feedback_role_arn?: rstring
    http_success_feedback_sample_rate?: rnumber
    kms_master_key_id?: rstring
    lambda_failure_feedback_role_arn?: rstring
    lambda_success_feedback_role_arn?: rstring
    lambda_success_feedback_sample_rate?: rnumber
    name?: rstring
    name_prefix?: rstring
    policy?: rstring
    sqs_failure_feedback_role_arn?: rstring
    sqs_success_feedback_role_arn?: rstring
    sqs_success_feedback_sample_rate?: rnumber
}

export class aws_sns_topic implements Resource {
    config: aws_sns_topic_config
    private _is_data: boolean = false
    private _name: string = "aws_sns_topic"
    private _id: string;
    constructor(id: string, config: aws_sns_topic_config) {
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
    
    get ref_application_failure_feedback_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.application_failure_feedback_role_arn`)
    }
    get ref_application_success_feedback_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.application_success_feedback_role_arn`)
    }
    get ref_application_success_feedback_sample_rate(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.application_success_feedback_sample_rate`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_delivery_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.delivery_policy`)
    }
    get ref_display_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.display_name`)
    }
    get ref_http_failure_feedback_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.http_failure_feedback_role_arn`)
    }
    get ref_http_success_feedback_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.http_success_feedback_role_arn`)
    }
    get ref_http_success_feedback_sample_rate(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.http_success_feedback_sample_rate`)
    }
    get ref_kms_master_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_master_key_id`)
    }
    get ref_lambda_failure_feedback_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.lambda_failure_feedback_role_arn`)
    }
    get ref_lambda_success_feedback_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.lambda_success_feedback_role_arn`)
    }
    get ref_lambda_success_feedback_sample_rate(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.lambda_success_feedback_sample_rate`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_sqs_failure_feedback_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sqs_failure_feedback_role_arn`)
    }
    get ref_sqs_success_feedback_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sqs_success_feedback_role_arn`)
    }
    get ref_sqs_success_feedback_sample_rate(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.sqs_success_feedback_sample_rate`)
    }
}

