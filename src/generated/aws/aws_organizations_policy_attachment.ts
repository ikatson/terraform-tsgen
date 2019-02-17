import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_organizations_policy_attachment_config {
    policy_id: rstring
    target_id: rstring
}

export class aws_organizations_policy_attachment implements Resource {
    config: aws_organizations_policy_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_organizations_policy_attachment"
    private _id: string;
    constructor(id: string, config: aws_organizations_policy_attachment_config) {
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
    
    get ref_policy_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy_id`)
    }
    get ref_target_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.target_id`)
    }
}

