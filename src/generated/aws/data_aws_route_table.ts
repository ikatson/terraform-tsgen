import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_route_table__associations {
    main?: rboolean
    route_table_association_id?: rstring
    route_table_id?: rstring
    subnet_id?: rstring
}

export interface _data_aws_route_table__filter {
    name: rstring
    values: rstring[]
}

export interface _data_aws_route_table__routes {
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

export interface data_aws_route_table_config {
    associations?: _data_aws_route_table__associations[]
    filter?: _data_aws_route_table__filter[]
    owner_id?: rstring
    route_table_id?: rstring
    routes?: _data_aws_route_table__routes[]
    subnet_id?: rstring
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class data_aws_route_table implements Data {
    config: data_aws_route_table_config
    private _is_data: boolean = true
    private _name: string = "aws_route_table"
    private _id: string;
    constructor(id: string, config: data_aws_route_table_config) {
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
    
    get ref_associations(): Reference<_data_aws_route_table__associations[]> {
        return new Reference(`data.${this._name}.${this._id}.associations`)
  }
    get ref_filter(): Reference<_data_aws_route_table__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_route_table_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.route_table_id`)
  }
    get ref_routes(): Reference<_data_aws_route_table__routes[]> {
        return new Reference(`data.${this._name}.${this._id}.routes`)
  }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subnet_id`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

