import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_vpc_dhcp_options_config {
    domain_name?: rstring
    domain_name_servers?: rstring[]
    netbios_name_servers?: rstring[]
    netbios_node_type?: rstring
    ntp_servers?: rstring[]
    owner_id?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_vpc_dhcp_options implements Resource {
    config: aws_vpc_dhcp_options_config
    private _is_data: boolean = false
    private _name: string = "aws_vpc_dhcp_options"
    private _id: string;
    constructor(id: string, config: aws_vpc_dhcp_options_config) {
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
    
    get ref_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain_name`)
    }
    get ref_domain_name_servers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.domain_name_servers`)
    }
    get ref_netbios_name_servers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.netbios_name_servers`)
    }
    get ref_netbios_node_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.netbios_node_type`)
    }
    get ref_ntp_servers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.ntp_servers`)
    }
    get ref_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner_id`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

