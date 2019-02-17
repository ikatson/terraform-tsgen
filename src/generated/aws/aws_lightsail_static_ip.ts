import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_lightsail_static_ip_config {
    arn?: rstring
    ip_address?: rstring
    name: rstring
    support_code?: rstring
}

export class aws_lightsail_static_ip implements Resource {
    config: aws_lightsail_static_ip_config
    private _is_data: boolean = false
    private _name: string = "aws_lightsail_static_ip"
    private _id: string;
    constructor(id: string, config: aws_lightsail_static_ip_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_ip_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ip_address`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_support_code(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.support_code`)
    }
}

