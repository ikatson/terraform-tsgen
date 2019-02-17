import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_pinpoint_gcm_channel_config {
    api_key: rstring
    application_id: rstring
    enabled?: rboolean
}

export class data_aws_pinpoint_gcm_channel implements Data {
    config: data_aws_pinpoint_gcm_channel_config
    private _is_data: boolean = true
    private _name: string = "data_aws_pinpoint_gcm_channel"
    private _id: string;
    constructor(id: string, config: data_aws_pinpoint_gcm_channel_config) {
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
    
    get ref_api_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.api_key`)
  }
    get ref_application_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.application_id`)
  }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enabled`)
  }
}

