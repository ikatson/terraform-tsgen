import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iot_policy_attachment_config {
    policy: rstring
    target: rstring
}

export class data_aws_iot_policy_attachment implements Data {
    config: data_aws_iot_policy_attachment_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iot_policy_attachment"
    private _id: string;
    constructor(id: string, config: data_aws_iot_policy_attachment_config) {
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
        return new Reference(`data.${this._name}.${this._id}.policy`)
  }
    get ref_target(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.target`)
  }
}

