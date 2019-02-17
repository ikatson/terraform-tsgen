import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_budgets_budget__cost_types {
    include_credit?: rboolean
    include_discount?: rboolean
    include_other_subscription?: rboolean
    include_recurring?: rboolean
    include_refund?: rboolean
    include_subscription?: rboolean
    include_support?: rboolean
    include_tax?: rboolean
    include_upfront?: rboolean
    use_amortized?: rboolean
    use_blended?: rboolean
}

export interface aws_budgets_budget_config {
    account_id?: rstring
    budget_type: rstring
    cost_filters?: {[propName: string]: rstring}
    cost_types?: _aws_budgets_budget__cost_types[]
    limit_amount: rstring
    limit_unit: rstring
    name?: rstring
    name_prefix?: rstring
    time_period_end?: rstring
    time_period_start: rstring
    time_unit: rstring
}

export class aws_budgets_budget implements Resource {
    config: aws_budgets_budget_config
    private _is_data: boolean = false
    private _name: string = "aws_budgets_budget"
    private _id: string;
    constructor(id: string, config: aws_budgets_budget_config) {
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
    
    get ref_account_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.account_id`)
    }
    get ref_budget_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.budget_type`)
    }
    get ref_cost_filters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.cost_filters`)
    }
    get ref_cost_types(): Reference<_aws_budgets_budget__cost_types[]> {
        return new Reference(`${this._name}.${this._id}.cost_types`)
    }
    get ref_limit_amount(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.limit_amount`)
    }
    get ref_limit_unit(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.limit_unit`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_time_period_end(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.time_period_end`)
    }
    get ref_time_period_start(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.time_period_start`)
    }
    get ref_time_unit(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.time_unit`)
    }
}

