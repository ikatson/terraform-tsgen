import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_sns_platform_application_config {
    arn?: rstring
    event_delivery_failure_topic_arn?: rstring
    event_endpoint_created_topic_arn?: rstring
    event_endpoint_deleted_topic_arn?: rstring
    event_endpoint_updated_topic_arn?: rstring
    failure_feedback_role_arn?: rstring
    name: rstring
    platform: rstring
    platform_credential: rstring
    platform_principal?: rstring
    success_feedback_role_arn?: rstring
    success_feedback_sample_rate?: rstring
}

export class data_aws_sns_platform_application implements Data {
    config: data_aws_sns_platform_application_config
    private _is_data: boolean = true
    private _name: string = "data_aws_sns_platform_application"
    private _id: string;
    constructor(id: string, config: data_aws_sns_platform_application_config) {
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
    get ref_event_delivery_failure_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.event_delivery_failure_topic_arn`)
  }
    get ref_event_endpoint_created_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.event_endpoint_created_topic_arn`)
  }
    get ref_event_endpoint_deleted_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.event_endpoint_deleted_topic_arn`)
  }
    get ref_event_endpoint_updated_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.event_endpoint_updated_topic_arn`)
  }
    get ref_failure_feedback_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.failure_feedback_role_arn`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_platform(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.platform`)
  }
    get ref_platform_credential(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.platform_credential`)
  }
    get ref_platform_principal(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.platform_principal`)
  }
    get ref_success_feedback_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.success_feedback_role_arn`)
  }
    get ref_success_feedback_sample_rate(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.success_feedback_sample_rate`)
  }
}

