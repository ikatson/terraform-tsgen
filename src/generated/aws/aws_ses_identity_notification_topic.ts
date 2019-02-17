import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ses_identity_notification_topic_config {
    identity: rstring
    notification_type: rstring
    topic_arn?: rstring
}

export class aws_ses_identity_notification_topic implements Resource {
    config: aws_ses_identity_notification_topic_config
    private _is_data: boolean = false
    private _name: string = "aws_ses_identity_notification_topic"
    private _id: string;
    constructor(id: string, config: aws_ses_identity_notification_topic_config) {
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
        return new Reference(`${this._name}.${this._id}.identity`)
    }
    get ref_notification_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.notification_type`)
    }
    get ref_topic_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.topic_arn`)
    }
}

