import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_customer_gateway_config {
    bgp_asn: rnumber
    ip_address: rstring
    tags?: {[propName: string]: rstring}
    type: rstring
}

export class data_aws_customer_gateway implements Data {
    config: data_aws_customer_gateway_config
    private _is_data: boolean = true
    private _name: string = "data_aws_customer_gateway"
    private _id: string;
    constructor(id: string, config: data_aws_customer_gateway_config) {
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
    
    get ref_bgp_asn(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.bgp_asn`)
  }
    get ref_ip_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ip_address`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

