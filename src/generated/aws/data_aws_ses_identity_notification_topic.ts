import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ses_identity_notification_topic_config {
    identity: rstring
    notification_type: rstring
    topic_arn?: rstring
}

export class data_aws_ses_identity_notification_topic implements Data {
    config: data_aws_ses_identity_notification_topic_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ses_identity_notification_topic"
    private _id: string;
    constructor(id: string, config: data_aws_ses_identity_notification_topic_config) {
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
    
    get ref_identity(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.identity`)
  }
    get ref_notification_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.notification_type`)
  }
    get ref_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.topic_arn`)
  }
}

