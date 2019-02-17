import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_dx_hosted_private_virtual_interface_config {
    address_family: rstring
    amazon_address?: rstring
    arn?: rstring
    bgp_asn: rnumber
    bgp_auth_key?: rstring
    connection_id: rstring
    customer_address?: rstring
    jumbo_frame_capable?: rboolean
    mtu?: rnumber
    name: rstring
    owner_account_id: rstring
    vlan: rnumber
}

export class data_aws_dx_hosted_private_virtual_interface implements Data {
    config: data_aws_dx_hosted_private_virtual_interface_config
    private _is_data: boolean = true
    private _name: string = "data_aws_dx_hosted_private_virtual_interface"
    private _id: string;
    constructor(id: string, config: data_aws_dx_hosted_private_virtual_interface_config) {
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
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_bgp_asn(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.bgp_asn`)
  }
    get ref_bgp_auth_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bgp_auth_key`)
  }
    get ref_connection_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.connection_id`)
  }
    get ref_customer_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.customer_address`)
  }
    get ref_jumbo_frame_capable(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.jumbo_frame_capable`)
  }
    get ref_mtu(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.mtu`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_owner_account_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_account_id`)
  }
    get ref_vlan(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.vlan`)
  }
}

