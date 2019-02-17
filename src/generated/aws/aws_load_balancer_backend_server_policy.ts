import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_load_balancer_backend_server_policy_config {
    instance_port: rnumber
    load_balancer_name: rstring
    policy_names?: rstring[]
}

export class aws_load_balancer_backend_server_policy implements Resource {
    config: aws_load_balancer_backend_server_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_load_balancer_backend_server_policy"
    private _id: string;
    constructor(id: string, config: aws_load_balancer_backend_server_policy_config) {
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
    
    get ref_instance_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.instance_port`)
    }
    get ref_load_balancer_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.load_balancer_name`)
    }
    get ref_policy_names(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.policy_names`)
    }
}

