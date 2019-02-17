import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_proxy_protocol_policy_config {
    instance_ports: rstring[]
    load_balancer: rstring
}

export class data_aws_proxy_protocol_policy implements Data {
    config: data_aws_proxy_protocol_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_proxy_protocol_policy"
    private _id: string;
    constructor(id: string, config: data_aws_proxy_protocol_policy_config) {
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
    
    get ref_instance_ports(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.instance_ports`)
  }
    get ref_load_balancer(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.load_balancer`)
  }
}

