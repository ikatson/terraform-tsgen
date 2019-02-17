import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_pinpoint_email_channel_config {
    application_id: rstring
    enabled?: rboolean
    from_address: rstring
    identity: rstring
    messages_per_second?: rnumber
    role_arn: rstring
}

export class aws_pinpoint_email_channel implements Resource {
    config: aws_pinpoint_email_channel_config
    private _is_data: boolean = false
    private _name: string = "aws_pinpoint_email_channel"
    private _id: string;
    constructor(id: string, config: aws_pinpoint_email_channel_config) {
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
    get ref_from_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.from_address`)
    }
    get ref_identity(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.identity`)
    }
    get ref_messages_per_second(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.messages_per_second`)
    }
    get ref_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_arn`)
    }
}

