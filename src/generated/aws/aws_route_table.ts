import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_route_table__route {
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

export interface aws_route_table_config {
    owner_id?: rstring
    propagating_vgws?: rstring[]
    route?: _aws_route_table__route[]
    tags?: {[propName: string]: rstring}
    vpc_id: rstring
}

export class aws_route_table implements Resource {
    config: aws_route_table_config
    private _is_data: boolean = false
    private _name: string = "aws_route_table"
    private _id: string;
    constructor(id: string, config: aws_route_table_config) {
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
    
    get ref_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner_id`)
    }
    get ref_propagating_vgws(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.propagating_vgws`)
    }
    get ref_route(): Reference<_aws_route_table__route[]> {
        return new Reference(`${this._name}.${this._id}.route`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

