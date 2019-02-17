import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_wafregional_rate_based_rule__predicate {
    data_id: rstring
    negated: rboolean
    type: rstring
}

export interface data_aws_wafregional_rate_based_rule_config {
    metric_name: rstring
    name: rstring
    predicate?: _data_aws_wafregional_rate_based_rule__predicate[]
    rate_key: rstring
    rate_limit: rnumber
}

export class data_aws_wafregional_rate_based_rule implements Data {
    config: data_aws_wafregional_rate_based_rule_config
    private _is_data: boolean = true
    private _name: string = "data_aws_wafregional_rate_based_rule"
    private _id: string;
    constructor(id: string, config: data_aws_wafregional_rate_based_rule_config) {
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
    
    get ref_metric_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.metric_name`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_predicate(): Reference<_data_aws_wafregional_rate_based_rule__predicate[]> {
        return new Reference(`data.${this._name}.${this._id}.predicate`)
  }
    get ref_rate_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rate_key`)
  }
    get ref_rate_limit(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.rate_limit`)
  }
}

