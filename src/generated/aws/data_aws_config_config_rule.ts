import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_config_config_rule__scope {
    compliance_resource_id?: rstring
    compliance_resource_types?: rstring[]
    tag_key?: rstring
    tag_value?: rstring
}

export interface __data_aws_config_config_rule__source__source_detail {
    event_source?: rstring
    maximum_execution_frequency?: rstring
    message_type?: rstring
}

export interface _data_aws_config_config_rule__source {
    owner: rstring
    source_detail?: __data_aws_config_config_rule__source__source_detail[]
    source_identifier: rstring
}

export interface data_aws_config_config_rule_config {
    arn?: rstring
    description?: rstring
    input_parameters?: rstring
    maximum_execution_frequency?: rstring
    name: rstring
    rule_id?: rstring
    scope?: _data_aws_config_config_rule__scope[]
    source: _data_aws_config_config_rule__source[]
}

export class data_aws_config_config_rule implements Data {
    config: data_aws_config_config_rule_config
    private _is_data: boolean = true
    private _name: string = "data_aws_config_config_rule"
    private _id: string;
    constructor(id: string, config: data_aws_config_config_rule_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_input_parameters(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.input_parameters`)
  }
    get ref_maximum_execution_frequency(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.maximum_execution_frequency`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_rule_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rule_id`)
  }
    get ref_scope(): Reference<_data_aws_config_config_rule__scope[]> {
        return new Reference(`data.${this._name}.${this._id}.scope`)
  }
    get ref_source(): Reference<_data_aws_config_config_rule__source[]> {
        return new Reference(`data.${this._name}.${this._id}.source`)
  }
}

