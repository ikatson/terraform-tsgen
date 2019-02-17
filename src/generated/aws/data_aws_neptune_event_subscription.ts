import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_neptune_event_subscription_config {
    arn?: rstring
    customer_aws_id?: rstring
    enabled?: rboolean
    event_categories?: rstring[]
    name?: rstring
    name_prefix?: rstring
    sns_topic_arn: rstring
    source_ids?: rstring[]
    source_type?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_neptune_event_subscription implements Data {
    config: data_aws_neptune_event_subscription_config
    private _is_data: boolean = true
    private _name: string = "data_aws_neptune_event_subscription"
    private _id: string;
    constructor(id: string, config: data_aws_neptune_event_subscription_config) {
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
    get ref_customer_aws_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.customer_aws_id`)
  }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enabled`)
  }
    get ref_event_categories(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.event_categories`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_prefix`)
  }
    get ref_sns_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.sns_topic_arn`)
  }
    get ref_source_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.source_ids`)
  }
    get ref_source_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_type`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

