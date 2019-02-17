import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_sns_sms_preferences_config {
    default_sender_id?: rstring
    default_sms_type?: rstring
    delivery_status_iam_role_arn?: rstring
    delivery_status_success_sampling_rate?: rstring
    monthly_spend_limit?: rstring
    usage_report_s3_bucket?: rstring
}

export class aws_sns_sms_preferences implements Resource {
    config: aws_sns_sms_preferences_config
    private _is_data: boolean = false
    private _name: string = "aws_sns_sms_preferences"
    private _id: string;
    constructor(id: string, config: aws_sns_sms_preferences_config) {
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
    
    get ref_default_sender_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_sender_id`)
    }
    get ref_default_sms_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_sms_type`)
    }
    get ref_delivery_status_iam_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.delivery_status_iam_role_arn`)
    }
    get ref_delivery_status_success_sampling_rate(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.delivery_status_success_sampling_rate`)
    }
    get ref_monthly_spend_limit(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.monthly_spend_limit`)
    }
    get ref_usage_report_s3_bucket(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.usage_report_s3_bucket`)
    }
}

