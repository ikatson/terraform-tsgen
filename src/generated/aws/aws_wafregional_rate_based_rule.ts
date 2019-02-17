import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_wafregional_rate_based_rule__predicate {
    data_id: rstring
    negated: rboolean
    type: rstring
}

export interface aws_wafregional_rate_based_rule_config {
    metric_name: rstring
    name: rstring
    predicate?: _aws_wafregional_rate_based_rule__predicate[]
    rate_key: rstring
    rate_limit: rnumber
}

export class aws_wafregional_rate_based_rule implements Resource {
    config: aws_wafregional_rate_based_rule_config
    private _is_data: boolean = false
    private _name: string = "aws_wafregional_rate_based_rule"
    private _id: string;
    constructor(id: string, config: aws_wafregional_rate_based_rule_config) {
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
        return new Reference(`${this._name}.${this._id}.metric_name`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_predicate(): Reference<_aws_wafregional_rate_based_rule__predicate[]> {
        return new Reference(`${this._name}.${this._id}.predicate`)
    }
    get ref_rate_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rate_key`)
    }
    get ref_rate_limit(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.rate_limit`)
    }
}

