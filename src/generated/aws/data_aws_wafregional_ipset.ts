import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_wafregional_ipset__ip_set_descriptor {
    type: rstring
    value: rstring
}

export interface data_aws_wafregional_ipset_config {
    arn?: rstring
    ip_set_descriptor?: _data_aws_wafregional_ipset__ip_set_descriptor[]
    name: rstring
}

export class data_aws_wafregional_ipset implements Data {
    config: data_aws_wafregional_ipset_config
    private _is_data: boolean = true
    private _name: string = "data_aws_wafregional_ipset"
    private _id: string;
    constructor(id: string, config: data_aws_wafregional_ipset_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_ip_set_descriptor(): Reference<_data_aws_wafregional_ipset__ip_set_descriptor[]> {
        return new Reference(`data.${this._name}.${this._id}.ip_set_descriptor`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

