import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_default_subnet_config {
    arn?: rstring
    assign_ipv6_address_on_creation?: rboolean
    availability_zone: rstring
    availability_zone_id?: rstring
    cidr_block?: rstring
    ipv6_cidr_block?: rstring
    ipv6_cidr_block_association_id?: rstring
    map_public_ip_on_launch?: rboolean
    owner_id?: rstring
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class aws_default_subnet implements Resource {
    config: aws_default_subnet_config
    private _is_data: boolean = false
    private _name: string = "aws_default_subnet"
    private _id: string;
    constructor(id: string, config: aws_default_subnet_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_assign_ipv6_address_on_creation(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.assign_ipv6_address_on_creation`)
    }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.availability_zone`)
    }
    get ref_availability_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.availability_zone_id`)
    }
    get ref_cidr_block(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cidr_block`)
    }
    get ref_ipv6_cidr_block(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ipv6_cidr_block`)
    }
    get ref_ipv6_cidr_block_association_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ipv6_cidr_block_association_id`)
    }
    get ref_map_public_ip_on_launch(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.map_public_ip_on_launch`)
    }
    get ref_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner_id`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

