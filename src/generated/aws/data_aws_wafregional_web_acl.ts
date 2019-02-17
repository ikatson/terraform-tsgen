import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_wafregional_web_acl__default_action {
    type: rstring
}

export interface __data_aws_wafregional_web_acl__logging_configuration__redacted_fields__field_to_match {
    data?: rstring
    type: rstring
}

export interface __data_aws_wafregional_web_acl__logging_configuration__redacted_fields {
    field_to_match: __data_aws_wafregional_web_acl__logging_configuration__redacted_fields__field_to_match[]
}

export interface _data_aws_wafregional_web_acl__logging_configuration {
    log_destination: rstring
    redacted_fields?: __data_aws_wafregional_web_acl__logging_configuration__redacted_fields[]
}

export interface __data_aws_wafregional_web_acl__rule__action {
    type: rstring
}

export interface __data_aws_wafregional_web_acl__rule__override_action {
    type: rstring
}

export interface _data_aws_wafregional_web_acl__rule {
    action?: __data_aws_wafregional_web_acl__rule__action[]
    override_action?: __data_aws_wafregional_web_acl__rule__override_action[]
    priority: rnumber
    rule_id: rstring
    type?: rstring
}

export interface data_aws_wafregional_web_acl_config {
    arn?: rstring
    default_action: _data_aws_wafregional_web_acl__default_action[]
    logging_configuration?: _data_aws_wafregional_web_acl__logging_configuration[]
    metric_name: rstring
    name: rstring
    rule?: _data_aws_wafregional_web_acl__rule[]
}

export class data_aws_wafregional_web_acl implements Data {
    config: data_aws_wafregional_web_acl_config
    private _is_data: boolean = true
    private _name: string = "data_aws_wafregional_web_acl"
    private _id: string;
    constructor(id: string, config: data_aws_wafregional_web_acl_config) {
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
    get ref_default_action(): Reference<_data_aws_wafregional_web_acl__default_action[]> {
        return new Reference(`data.${this._name}.${this._id}.default_action`)
  }
    get ref_logging_configuration(): Reference<_data_aws_wafregional_web_acl__logging_configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.logging_configuration`)
  }
    get ref_metric_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.metric_name`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_rule(): Reference<_data_aws_wafregional_web_acl__rule[]> {
        return new Reference(`data.${this._name}.${this._id}.rule`)
  }
}

