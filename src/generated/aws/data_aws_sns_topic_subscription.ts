import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_sns_topic_subscription_config {
    arn?: rstring
    confirmation_timeout_in_minutes?: rnumber
    delivery_policy?: rstring
    endpoint: rstring
    endpoint_auto_confirms?: rboolean
    filter_policy?: rstring
    protocol: rstring
    raw_message_delivery?: rboolean
    topic_arn: rstring
}

export class data_aws_sns_topic_subscription implements Data {
    config: data_aws_sns_topic_subscription_config
    private _is_data: boolean = true
    private _name: string = "data_aws_sns_topic_subscription"
    private _id: string;
    constructor(id: string, config: data_aws_sns_topic_subscription_config) {
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
    get ref_confirmation_timeout_in_minutes(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.confirmation_timeout_in_minutes`)
  }
    get ref_delivery_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.delivery_policy`)
  }
    get ref_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint`)
  }
    get ref_endpoint_auto_confirms(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.endpoint_auto_confirms`)
  }
    get ref_filter_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.filter_policy`)
  }
    get ref_protocol(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.protocol`)
  }
    get ref_raw_message_delivery(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.raw_message_delivery`)
  }
    get ref_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.topic_arn`)
  }
}

