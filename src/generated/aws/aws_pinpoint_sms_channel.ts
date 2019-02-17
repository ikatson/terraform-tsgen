import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_pinpoint_sms_channel_config {
    application_id: rstring
    enabled?: rboolean
    promotional_messages_per_second?: rnumber
    sender_id?: rstring
    short_code?: rstring
    transactional_messages_per_second?: rnumber
}

export class aws_pinpoint_sms_channel implements Resource {
    config: aws_pinpoint_sms_channel_config
    private _is_data: boolean = false
    private _name: string = "aws_pinpoint_sms_channel"
    private _id: string;
    constructor(id: string, config: aws_pinpoint_sms_channel_config) {
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
    
    get ref_application_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.application_id`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_promotional_messages_per_second(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.promotional_messages_per_second`)
    }
    get ref_sender_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sender_id`)
    }
    get ref_short_code(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.short_code`)
    }
    get ref_transactional_messages_per_second(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.transactional_messages_per_second`)
    }
}

