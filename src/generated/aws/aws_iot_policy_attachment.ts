import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iot_policy_attachment_config {
    policy: rstring
    target: rstring
}

export class aws_iot_policy_attachment implements Resource {
    config: aws_iot_policy_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_iot_policy_attachment"
    private _id: string;
    constructor(id: string, config: aws_iot_policy_attachment_config) {
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
    
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_target(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.target`)
    }
}

