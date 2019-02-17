import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_vpn_connection__routes {
    destination_cidr_block?: rstring
    source?: rstring
    state?: rstring
}

export interface _aws_vpn_connection__vgw_telemetry {
    accepted_route_count?: rnumber
    last_status_change?: rstring
    outside_ip_address?: rstring
    status?: rstring
    status_message?: rstring
}

export interface aws_vpn_connection_config {
    customer_gateway_configuration?: rstring
    customer_gateway_id: rstring
    routes?: _aws_vpn_connection__routes[]
    static_routes_only?: rboolean
    tags?: {[propName: string]: rstring}
    transit_gateway_id?: rstring
    tunnel1_address?: rstring
    tunnel1_bgp_asn?: rstring
    tunnel1_bgp_holdtime?: rnumber
    tunnel1_cgw_inside_address?: rstring
    tunnel1_inside_cidr?: rstring
    tunnel1_preshared_key?: rstring
    tunnel1_vgw_inside_address?: rstring
    tunnel2_address?: rstring
    tunnel2_bgp_asn?: rstring
    tunnel2_bgp_holdtime?: rnumber
    tunnel2_cgw_inside_address?: rstring
    tunnel2_inside_cidr?: rstring
    tunnel2_preshared_key?: rstring
    tunnel2_vgw_inside_address?: rstring
    type: rstring
    vgw_telemetry?: _aws_vpn_connection__vgw_telemetry[]
    vpn_gateway_id?: rstring
}

export class aws_vpn_connection implements Resource {
    config: aws_vpn_connection_config
    private _is_data: boolean = false
    private _name: string = "aws_vpn_connection"
    private _id: string;
    constructor(id: string, config: aws_vpn_connection_config) {
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
    
    get ref_customer_gateway_configuration(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.customer_gateway_configuration`)
    }
    get ref_customer_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.customer_gateway_id`)
    }
    get ref_routes(): Reference<_aws_vpn_connection__routes[]> {
        return new Reference(`${this._name}.${this._id}.routes`)
    }
    get ref_static_routes_only(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.static_routes_only`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_transit_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.transit_gateway_id`)
    }
    get ref_tunnel1_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel1_address`)
    }
    get ref_tunnel1_bgp_asn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel1_bgp_asn`)
    }
    get ref_tunnel1_bgp_holdtime(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.tunnel1_bgp_holdtime`)
    }
    get ref_tunnel1_cgw_inside_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel1_cgw_inside_address`)
    }
    get ref_tunnel1_inside_cidr(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel1_inside_cidr`)
    }
    get ref_tunnel1_preshared_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel1_preshared_key`)
    }
    get ref_tunnel1_vgw_inside_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel1_vgw_inside_address`)
    }
    get ref_tunnel2_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel2_address`)
    }
    get ref_tunnel2_bgp_asn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel2_bgp_asn`)
    }
    get ref_tunnel2_bgp_holdtime(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.tunnel2_bgp_holdtime`)
    }
    get ref_tunnel2_cgw_inside_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel2_cgw_inside_address`)
    }
    get ref_tunnel2_inside_cidr(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel2_inside_cidr`)
    }
    get ref_tunnel2_preshared_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel2_preshared_key`)
    }
    get ref_tunnel2_vgw_inside_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tunnel2_vgw_inside_address`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
    get ref_vgw_telemetry(): Reference<_aws_vpn_connection__vgw_telemetry[]> {
        return new Reference(`${this._name}.${this._id}.vgw_telemetry`)
    }
    get ref_vpn_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpn_gateway_id`)
    }
}

