import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_default_route_table__route {
    cidr_block?: rstring
    egress_only_gateway_id?: rstring
    gateway_id?: rstring
    instance_id?: rstring
    ipv6_cidr_block?: rstring
    nat_gateway_id?: rstring
    network_interface_id?: rstring
    transit_gateway_id?: rstring
    vpc_peering_connection_id?: rstring
}

export interface data_aws_default_route_table_config {
    default_route_table_id: rstring
    owner_id?: rstring
    propagating_vgws?: rstring[]
    route?: _data_aws_default_route_table__route[]
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class data_aws_default_route_table implements Data {
    config: data_aws_default_route_table_config
    private _is_data: boolean = true
    private _name: string = "data_aws_default_route_table"
    private _id: string;
    constructor(id: string, config: data_aws_default_route_table_config) {
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
    
    get ref_default_route_table_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_route_table_id`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_propagating_vgws(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.propagating_vgws`)
  }
    get ref_route(): Reference<_data_aws_default_route_table__route[]> {
        return new Reference(`data.${this._name}.${this._id}.route`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

