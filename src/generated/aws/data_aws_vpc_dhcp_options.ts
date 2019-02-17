import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_vpc_dhcp_options__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_vpc_dhcp_options_config {
    dhcp_options_id?: rstring
    domain_name?: rstring
    domain_name_servers?: rstring[]
    filter?: _data_aws_vpc_dhcp_options__filter[]
    netbios_name_servers?: rstring[]
    netbios_node_type?: rstring
    ntp_servers?: rstring[]
    owner_id?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_vpc_dhcp_options implements Data {
    config: data_aws_vpc_dhcp_options_config
    private _is_data: boolean = true
    private _name: string = "aws_vpc_dhcp_options"
    private _id: string;
    constructor(id: string, config: data_aws_vpc_dhcp_options_config) {
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
    
    get ref_dhcp_options_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.dhcp_options_id`)
  }
    get ref_domain_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.domain_name`)
  }
    get ref_domain_name_servers(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.domain_name_servers`)
  }
    get ref_filter(): Reference<_data_aws_vpc_dhcp_options__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_netbios_name_servers(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.netbios_name_servers`)
  }
    get ref_netbios_node_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.netbios_node_type`)
  }
    get ref_ntp_servers(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ntp_servers`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

