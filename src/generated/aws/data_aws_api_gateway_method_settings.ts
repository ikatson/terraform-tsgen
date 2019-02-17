import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_api_gateway_method_settings__settings {
    cache_data_encrypted?: rboolean
    cache_ttl_in_seconds?: rnumber
    caching_enabled?: rboolean
    data_trace_enabled?: rboolean
    logging_level?: rstring
    metrics_enabled?: rboolean
    require_authorization_for_cache_control?: rboolean
    throttling_burst_limit?: rnumber
    throttling_rate_limit?: rnumber
    unauthorized_cache_control_header_strategy?: rstring
}

export interface data_aws_api_gateway_method_settings_config {
    method_path: rstring
    rest_api_id: rstring
    settings: _data_aws_api_gateway_method_settings__settings[]
    stage_name: rstring
}

export class data_aws_api_gateway_method_settings implements Data {
    config: data_aws_api_gateway_method_settings_config
    private _is_data: boolean = true
    private _name: string = "data_aws_api_gateway_method_settings"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_method_settings_config) {
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
    
    get ref_method_path(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.method_path`)
  }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rest_api_id`)
  }
    get ref_settings(): Reference<_data_aws_api_gateway_method_settings__settings[]> {
        return new Reference(`data.${this._name}.${this._id}.settings`)
  }
    get ref_stage_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.stage_name`)
  }
}

