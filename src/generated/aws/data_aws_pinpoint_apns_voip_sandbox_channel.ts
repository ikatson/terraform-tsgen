import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_pinpoint_apns_voip_sandbox_channel_config {
    application_id: rstring
    bundle_id?: rstring
    certificate?: rstring
    default_authentication_method?: rstring
    enabled?: rboolean
    private_key?: rstring
    team_id?: rstring
    token_key?: rstring
    token_key_id?: rstring
}

export class data_aws_pinpoint_apns_voip_sandbox_channel implements Data {
    config: data_aws_pinpoint_apns_voip_sandbox_channel_config
    private _is_data: boolean = true
    private _name: string = "data_aws_pinpoint_apns_voip_sandbox_channel"
    private _id: string;
    constructor(id: string, config: data_aws_pinpoint_apns_voip_sandbox_channel_config) {
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
    get ref_bundle_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bundle_id`)
  }
    get ref_certificate(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.certificate`)
  }
    get ref_default_authentication_method(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_authentication_method`)
  }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enabled`)
  }
    get ref_private_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_key`)
  }
    get ref_team_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.team_id`)
  }
    get ref_token_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.token_key`)
  }
    get ref_token_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.token_key_id`)
  }
}

