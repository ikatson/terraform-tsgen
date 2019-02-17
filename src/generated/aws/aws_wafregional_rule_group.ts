import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_wafregional_rule_group__activated_rule__action {
    type: rstring
}

export interface _aws_wafregional_rule_group__activated_rule {
    action: __aws_wafregional_rule_group__activated_rule__action[]
    priority: rnumber
    rule_id: rstring
    type?: rstring
}

export interface aws_wafregional_rule_group_config {
    activated_rule?: _aws_wafregional_rule_group__activated_rule[]
    metric_name: rstring
    name: rstring
}

export class aws_wafregional_rule_group implements Resource {
    config: aws_wafregional_rule_group_config
    private _is_data: boolean = false
    private _name: string = "aws_wafregional_rule_group"
    private _id: string;
    constructor(id: string, config: aws_wafregional_rule_group_config) {
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
    
    get ref_activated_rule(): Reference<_aws_wafregional_rule_group__activated_rule[]> {
        return new Reference(`${this._name}.${this._id}.activated_rule`)
    }
    get ref_metric_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.metric_name`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

