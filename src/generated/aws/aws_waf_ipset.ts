import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_waf_ipset__ip_set_descriptors {
    type: rstring
    value: rstring
}

export interface aws_waf_ipset_config {
    arn?: rstring
    ip_set_descriptors?: _aws_waf_ipset__ip_set_descriptors[]
    name: rstring
}

export class aws_waf_ipset implements Resource {
    config: aws_waf_ipset_config
    private _is_data: boolean = false
    private _name: string = "aws_waf_ipset"
    private _id: string;
    constructor(id: string, config: aws_waf_ipset_config) {
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
    get ref_ip_set_descriptors(): Reference<_aws_waf_ipset__ip_set_descriptors[]> {
        return new Reference(`${this._name}.${this._id}.ip_set_descriptors`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

