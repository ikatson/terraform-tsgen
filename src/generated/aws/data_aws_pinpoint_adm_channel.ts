import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_pinpoint_adm_channel_config {
    application_id: rstring
    client_id: rstring
    client_secret: rstring
    enabled?: rboolean
}

export class data_aws_pinpoint_adm_channel implements Data {
    config: data_aws_pinpoint_adm_channel_config
    private _is_data: boolean = true
    private _name: string = "data_aws_pinpoint_adm_channel"
    private _id: string;
    constructor(id: string, config: data_aws_pinpoint_adm_channel_config) {
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
        return new Reference(`data.${this._name}.${this._id}.application_id`)
  }
    get ref_client_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.client_id`)
  }
    get ref_client_secret(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.client_secret`)
  }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enabled`)
  }
}

