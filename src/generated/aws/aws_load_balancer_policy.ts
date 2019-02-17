import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_load_balancer_policy__policy_attribute {
    name?: rstring
    value?: rstring
}

export interface aws_load_balancer_policy_config {
    load_balancer_name: rstring
    policy_attribute?: _aws_load_balancer_policy__policy_attribute[]
    policy_name: rstring
    policy_type_name: rstring
}

export class aws_load_balancer_policy implements Resource {
    config: aws_load_balancer_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_load_balancer_policy"
    private _id: string;
    constructor(id: string, config: aws_load_balancer_policy_config) {
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
    
    get ref_load_balancer_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.load_balancer_name`)
    }
    get ref_policy_attribute(): Reference<_aws_load_balancer_policy__policy_attribute[]> {
        return new Reference(`${this._name}.${this._id}.policy_attribute`)
    }
    get ref_policy_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy_name`)
    }
    get ref_policy_type_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy_type_name`)
    }
}

