import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_guardduty_member_config {
    account_id: rstring
    detector_id: rstring
    disable_email_notification?: rboolean
    email: rstring
    invitation_message?: rstring
    invite?: rboolean
    relationship_status?: rstring
}

export class aws_guardduty_member implements Resource {
    config: aws_guardduty_member_config
    private _is_data: boolean = false
    private _name: string = "aws_guardduty_member"
    private _id: string;
    constructor(id: string, config: aws_guardduty_member_config) {
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
    
    get ref_account_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.account_id`)
    }
    get ref_detector_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.detector_id`)
    }
    get ref_disable_email_notification(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.disable_email_notification`)
    }
    get ref_email(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.email`)
    }
    get ref_invitation_message(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.invitation_message`)
    }
    get ref_invite(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.invite`)
    }
    get ref_relationship_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.relationship_status`)
    }
}

