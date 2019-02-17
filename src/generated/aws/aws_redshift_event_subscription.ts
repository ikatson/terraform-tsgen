import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_redshift_event_subscription_config {
    customer_aws_id?: rstring
    enabled?: rboolean
    event_categories?: rstring[]
    name: rstring
    severity?: rstring
    sns_topic_arn: rstring
    source_ids?: rstring[]
    source_type?: rstring
    status?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_redshift_event_subscription implements Resource {
    config: aws_redshift_event_subscription_config
    private _is_data: boolean = false
    private _name: string = "aws_redshift_event_subscription"
    private _id: string;
    constructor(id: string, config: aws_redshift_event_subscription_config) {
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
    
    get ref_customer_aws_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.customer_aws_id`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_event_categories(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.event_categories`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_severity(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.severity`)
    }
    get ref_sns_topic_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sns_topic_arn`)
    }
    get ref_source_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.source_ids`)
    }
    get ref_source_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_type`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

