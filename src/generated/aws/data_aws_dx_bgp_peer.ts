import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_dx_bgp_peer_config {
    address_family: rstring
    amazon_address?: rstring
    bgp_asn: rnumber
    bgp_auth_key?: rstring
    bgp_status?: rstring
    customer_address?: rstring
    virtual_interface_id: rstring
}

export class data_aws_dx_bgp_peer implements Data {
    config: data_aws_dx_bgp_peer_config
    private _is_data: boolean = true
    private _name: string = "data_aws_dx_bgp_peer"
    private _id: string;
    constructor(id: string, config: data_aws_dx_bgp_peer_config) {
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
    
    get ref_address_family(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.address_family`)
  }
    get ref_amazon_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.amazon_address`)
  }
    get ref_bgp_asn(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.bgp_asn`)
  }
    get ref_bgp_auth_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bgp_auth_key`)
  }
    get ref_bgp_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bgp_status`)
  }
    get ref_customer_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.customer_address`)
  }
    get ref_virtual_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.virtual_interface_id`)
  }
}

