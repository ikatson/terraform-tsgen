import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ec2_transit_gateway_config {
    amazon_side_asn?: rnumber
    arn?: rstring
    association_default_route_table_id?: rstring
    auto_accept_shared_attachments?: rstring
    default_route_table_association?: rstring
    default_route_table_propagation?: rstring
    description?: rstring
    dns_support?: rstring
    owner_id?: rstring
    propagation_default_route_table_id?: rstring
    tags?: {[propName: string]: rstring}
    vpn_ecmp_support?: rstring
}

export class aws_ec2_transit_gateway implements Resource {
    config: aws_ec2_transit_gateway_config
    private _is_data: boolean = false
    private _name: string = "aws_ec2_transit_gateway"
    private _id: string;
    constructor(id: string, config: aws_ec2_transit_gateway_config) {
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
    
    get ref_amazon_side_asn(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.amazon_side_asn`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_association_default_route_table_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.association_default_route_table_id`)
    }
    get ref_auto_accept_shared_attachments(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.auto_accept_shared_attachments`)
    }
    get ref_default_route_table_association(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_route_table_association`)
    }
    get ref_default_route_table_propagation(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_route_table_propagation`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_dns_support(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dns_support`)
    }
    get ref_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner_id`)
    }
    get ref_propagation_default_route_table_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.propagation_default_route_table_id`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpn_ecmp_support(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpn_ecmp_support`)
    }
}

