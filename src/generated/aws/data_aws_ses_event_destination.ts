import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_ses_event_destination__cloudwatch_destination {
    default_value: rstring
    dimension_name: rstring
    value_source: rstring
}

export interface _data_aws_ses_event_destination__kinesis_destination {
    role_arn: rstring
    stream_arn: rstring
}

export interface _data_aws_ses_event_destination__sns_destination {
    topic_arn: rstring
}

export interface data_aws_ses_event_destination_config {
    cloudwatch_destination?: _data_aws_ses_event_destination__cloudwatch_destination[]
    configuration_set_name: rstring
    enabled?: rboolean
    kinesis_destination?: _data_aws_ses_event_destination__kinesis_destination[]
    matching_types: rstring[]
    name: rstring
    sns_destination?: _data_aws_ses_event_destination__sns_destination[]
}

export class data_aws_ses_event_destination implements Data {
    config: data_aws_ses_event_destination_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ses_event_destination"
    private _id: string;
    constructor(id: string, config: data_aws_ses_event_destination_config) {
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
    
    get ref_cloudwatch_destination(): Reference<_data_aws_ses_event_destination__cloudwatch_destination[]> {
        return new Reference(`data.${this._name}.${this._id}.cloudwatch_destination`)
  }
    get ref_configuration_set_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.configuration_set_name`)
  }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enabled`)
  }
    get ref_kinesis_destination(): Reference<_data_aws_ses_event_destination__kinesis_destination[]> {
        return new Reference(`data.${this._name}.${this._id}.kinesis_destination`)
  }
    get ref_matching_types(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.matching_types`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_sns_destination(): Reference<_data_aws_ses_event_destination__sns_destination[]> {
        return new Reference(`data.${this._name}.${this._id}.sns_destination`)
  }
}

