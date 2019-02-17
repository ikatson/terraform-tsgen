import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_waf_web_acl__default_action {
    type: rstring
}

export interface __aws_waf_web_acl__logging_configuration__redacted_fields__field_to_match {
    data?: rstring
    type: rstring
}

export interface __aws_waf_web_acl__logging_configuration__redacted_fields {
    field_to_match: __aws_waf_web_acl__logging_configuration__redacted_fields__field_to_match[]
}

export interface _aws_waf_web_acl__logging_configuration {
    log_destination: rstring
    redacted_fields?: __aws_waf_web_acl__logging_configuration__redacted_fields[]
}

export interface __aws_waf_web_acl__rules__action {
    type: rstring
}

export interface __aws_waf_web_acl__rules__override_action {
    type: rstring
}

export interface _aws_waf_web_acl__rules {
    action?: __aws_waf_web_acl__rules__action[]
    override_action?: __aws_waf_web_acl__rules__override_action[]
    priority: rnumber
    rule_id: rstring
    type?: rstring
}

export interface aws_waf_web_acl_config {
    arn?: rstring
    default_action: _aws_waf_web_acl__default_action[]
    logging_configuration?: _aws_waf_web_acl__logging_configuration[]
    metric_name: rstring
    name: rstring
    rules?: _aws_waf_web_acl__rules[]
}

export class aws_waf_web_acl implements Resource {
    config: aws_waf_web_acl_config
    private _is_data: boolean = false
    private _name: string = "aws_waf_web_acl"
    private _id: string;
    constructor(id: string, config: aws_waf_web_acl_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_default_action(): Reference<_aws_waf_web_acl__default_action[]> {
        return new Reference(`${this._name}.${this._id}.default_action`)
    }
    get ref_logging_configuration(): Reference<_aws_waf_web_acl__logging_configuration[]> {
        return new Reference(`${this._name}.${this._id}.logging_configuration`)
    }
    get ref_metric_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.metric_name`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_rules(): Reference<_aws_waf_web_acl__rules[]> {
        return new Reference(`${this._name}.${this._id}.rules`)
    }
}

