import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_vpc_config {
    arn?: rstring
    assign_generated_ipv6_cidr_block?: rboolean
    cidr_block: rstring
    default_network_acl_id?: rstring
    default_route_table_id?: rstring
    default_security_group_id?: rstring
    dhcp_options_id?: rstring
    enable_classiclink?: rboolean
    enable_classiclink_dns_support?: rboolean
    enable_dns_hostnames?: rboolean
    enable_dns_support?: rboolean
    instance_tenancy?: rstring
    ipv6_association_id?: rstring
    ipv6_cidr_block?: rstring
    main_route_table_id?: rstring
    owner_id?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_vpc implements Resource {
    config: aws_vpc_config
    private _is_data: boolean = false
    private _name: string = "aws_vpc"
    private _id: string;
    constructor(id: string, config: aws_vpc_config) {
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
    get ref_assign_generated_ipv6_cidr_block(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.assign_generated_ipv6_cidr_block`)
    }
    get ref_cidr_block(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cidr_block`)
    }
    get ref_default_network_acl_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_network_acl_id`)
    }
    get ref_default_route_table_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_route_table_id`)
    }
    get ref_default_security_group_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_security_group_id`)
    }
    get ref_dhcp_options_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dhcp_options_id`)
    }
    get ref_enable_classiclink(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_classiclink`)
    }
    get ref_enable_classiclink_dns_support(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_classiclink_dns_support`)
    }
    get ref_enable_dns_hostnames(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_dns_hostnames`)
    }
    get ref_enable_dns_support(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_dns_support`)
    }
    get ref_instance_tenancy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_tenancy`)
    }
    get ref_ipv6_association_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ipv6_association_id`)
    }
    get ref_ipv6_cidr_block(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ipv6_cidr_block`)
    }
    get ref_main_route_table_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.main_route_table_id`)
    }
    get ref_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner_id`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

