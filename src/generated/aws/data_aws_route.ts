import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_route_config {
    destination_cidr_block?: rstring
    destination_ipv6_cidr_block?: rstring
    egress_only_gateway_id?: rstring
    gateway_id?: rstring
    instance_id?: rstring
    nat_gateway_id?: rstring
    network_interface_id?: rstring
    route_table_id: rstring
    transit_gateway_id?: rstring
    vpc_peering_connection_id?: rstring
}

export class data_aws_route implements Data {
    config: data_aws_route_config
    private _is_data: boolean = true
    private _name: string = "aws_route"
    private _id: string;
    constructor(id: string, config: data_aws_route_config) {
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
        return new Reference(`data.${this._name}.${this._id}.destination_cidr_block`)
  }
    get ref_destination_ipv6_cidr_block(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.destination_ipv6_cidr_block`)
  }
    get ref_egress_only_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.egress_only_gateway_id`)
  }
    get ref_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_id`)
  }
    get ref_instance_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_id`)
  }
    get ref_nat_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.nat_gateway_id`)
  }
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_id`)
  }
    get ref_route_table_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.route_table_id`)
  }
    get ref_transit_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.transit_gateway_id`)
  }
    get ref_vpc_peering_connection_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_peering_connection_id`)
  }
}

