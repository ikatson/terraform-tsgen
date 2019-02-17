import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_pinpoint_event_stream_config {
    application_id: rstring
    destination_stream_arn: rstring
    role_arn: rstring
}

export class data_aws_pinpoint_event_stream implements Data {
    config: data_aws_pinpoint_event_stream_config
    private _is_data: boolean = true
    private _name: string = "data_aws_pinpoint_event_stream"
    private _id: string;
    constructor(id: string, config: data_aws_pinpoint_event_stream_config) {
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
    get ref_destination_stream_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.destination_stream_arn`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
}

