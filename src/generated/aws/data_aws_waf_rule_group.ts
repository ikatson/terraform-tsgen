import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_waf_rule_group__activated_rule__action {
    type: rstring
}

export interface _data_aws_waf_rule_group__activated_rule {
    action: __data_aws_waf_rule_group__activated_rule__action[]
    priority: rnumber
    rule_id: rstring
    type?: rstring
}

export interface data_aws_waf_rule_group_config {
    activated_rule?: _data_aws_waf_rule_group__activated_rule[]
    metric_name: rstring
    name: rstring
}

export class data_aws_waf_rule_group implements Data {
    config: data_aws_waf_rule_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_waf_rule_group"
    private _id: string;
    constructor(id: string, config: data_aws_waf_rule_group_config) {
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
    
    get ref_activated_rule(): Reference<_data_aws_waf_rule_group__activated_rule[]> {
        return new Reference(`data.${this._name}.${this._id}.activated_rule`)
  }
    get ref_metric_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.metric_name`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

