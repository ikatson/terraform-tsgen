import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ec2_transit_gateway_vpc_attachment_config {
    dns_support?: rstring
    ipv6_support?: rstring
    subnet_ids: rstring[]
    tags?: {[propName: string]: rstring}
    transit_gateway_default_route_table_association?: rboolean
    transit_gateway_default_route_table_propagation?: rboolean
    transit_gateway_id: rstring
    vpc_id: rstring
    vpc_owner_id?: rstring
}

export class aws_ec2_transit_gateway_vpc_attachment implements Resource {
    config: aws_ec2_transit_gateway_vpc_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_ec2_transit_gateway_vpc_attachment"
    private _id: string;
    constructor(id: string, config: aws_ec2_transit_gateway_vpc_attachment_config) {
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
    
    get ref_dns_support(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dns_support`)
    }
    get ref_ipv6_support(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ipv6_support`)
    }
    get ref_subnet_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.subnet_ids`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_transit_gateway_default_route_table_association(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.transit_gateway_default_route_table_association`)
    }
    get ref_transit_gateway_default_route_table_propagation(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.transit_gateway_default_route_table_propagation`)
    }
    get ref_transit_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.transit_gateway_id`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
    get ref_vpc_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_owner_id`)
    }
}

