import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_lb_ssl_negotiation_policy__attribute {
    name: rstring
    value: rstring
}

export interface aws_lb_ssl_negotiation_policy_config {
    attribute?: _aws_lb_ssl_negotiation_policy__attribute[]
    lb_port: rnumber
    load_balancer: rstring
    name: rstring
}

export class aws_lb_ssl_negotiation_policy implements Resource {
    config: aws_lb_ssl_negotiation_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_lb_ssl_negotiation_policy"
    private _id: string;
    constructor(id: string, config: aws_lb_ssl_negotiation_policy_config) {
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
    
    get ref_attribute(): Reference<_aws_lb_ssl_negotiation_policy__attribute[]> {
        return new Reference(`${this._name}.${this._id}.attribute`)
    }
    get ref_lb_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.lb_port`)
    }
    get ref_load_balancer(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.load_balancer`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

