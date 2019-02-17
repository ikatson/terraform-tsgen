import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_app_cookie_stickiness_policy_config {
    cookie_name: rstring
    lb_port: rnumber
    load_balancer: rstring
    name: rstring
}

export class data_aws_app_cookie_stickiness_policy implements Data {
    config: data_aws_app_cookie_stickiness_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_app_cookie_stickiness_policy"
    private _id: string;
    constructor(id: string, config: data_aws_app_cookie_stickiness_policy_config) {
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
    
    get ref_cookie_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cookie_name`)
  }
    get ref_lb_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.lb_port`)
  }
    get ref_load_balancer(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.load_balancer`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

