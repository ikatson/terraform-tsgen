import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_pinpoint_app__campaign_hook {
    lambda_function_name?: rstring
    mode?: rstring
    web_url?: rstring
}

export interface _data_aws_pinpoint_app__limits {
    daily?: rnumber
    maximum_duration?: rnumber
    messages_per_second?: rnumber
    total?: rnumber
}

export interface _data_aws_pinpoint_app__quiet_time {
    end?: rstring
    start?: rstring
}

export interface data_aws_pinpoint_app_config {
    application_id?: rstring
    campaign_hook?: _data_aws_pinpoint_app__campaign_hook[]
    limits?: _data_aws_pinpoint_app__limits[]
    name?: rstring
    name_prefix?: rstring
    quiet_time?: _data_aws_pinpoint_app__quiet_time[]
}

export class data_aws_pinpoint_app implements Data {
    config: data_aws_pinpoint_app_config
    private _is_data: boolean = true
    private _name: string = "data_aws_pinpoint_app"
    private _id: string;
    constructor(id: string, config: data_aws_pinpoint_app_config) {
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
    get ref_campaign_hook(): Reference<_data_aws_pinpoint_app__campaign_hook[]> {
        return new Reference(`data.${this._name}.${this._id}.campaign_hook`)
  }
    get ref_limits(): Reference<_data_aws_pinpoint_app__limits[]> {
        return new Reference(`data.${this._name}.${this._id}.limits`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_prefix`)
  }
    get ref_quiet_time(): Reference<_data_aws_pinpoint_app__quiet_time[]> {
        return new Reference(`data.${this._name}.${this._id}.quiet_time`)
  }
}

