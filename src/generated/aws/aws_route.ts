import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_route_config {
    destination_cidr_block?: rstring
    destination_ipv6_cidr_block?: rstring
    destination_prefix_list_id?: rstring
    egress_only_gateway_id?: rstring
    gateway_id?: rstring
    instance_id?: rstring
    instance_owner_id?: rstring
    nat_gateway_id?: rstring
    network_interface_id?: rstring
    origin?: rstring
    route_table_id: rstring
    state?: rstring
    transit_gateway_id?: rstring
    vpc_peering_connection_id?: rstring
}

export class aws_route implements Resource {
    config: aws_route_config
    private _is_data: boolean = false
    private _name: string = "aws_route"
    private _id: string;
    constructor(id: string, config: aws_route_config) {
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
    
    get ref_destination_cidr_block(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.destination_cidr_block`)
    }
    get ref_destination_ipv6_cidr_block(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.destination_ipv6_cidr_block`)
    }
    get ref_destination_prefix_list_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.destination_prefix_list_id`)
    }
    get ref_egress_only_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.egress_only_gateway_id`)
    }
    get ref_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.gateway_id`)
    }
    get ref_instance_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_id`)
    }
    get ref_instance_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_owner_id`)
    }
    get ref_nat_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.nat_gateway_id`)
    }
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.network_interface_id`)
    }
    get ref_origin(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.origin`)
    }
    get ref_route_table_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.route_table_id`)
    }
    get ref_state(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.state`)
    }
    get ref_transit_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.transit_gateway_id`)
    }
    get ref_vpc_peering_connection_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_peering_connection_id`)
    }
}

