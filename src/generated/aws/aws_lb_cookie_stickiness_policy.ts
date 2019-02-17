import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_lb_cookie_stickiness_policy_config {
    cookie_expiration_period?: rnumber
    lb_port: rnumber
    load_balancer: rstring
    name: rstring
}

export class aws_lb_cookie_stickiness_policy implements Resource {
    config: aws_lb_cookie_stickiness_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_lb_cookie_stickiness_policy"
    private _id: string;
    constructor(id: string, config: aws_lb_cookie_stickiness_policy_config) {
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
    
    get ref_cookie_expiration_period(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.cookie_expiration_period`)
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

