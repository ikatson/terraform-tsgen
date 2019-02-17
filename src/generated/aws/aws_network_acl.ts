import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_network_acl__egress {
    action: rstring
    cidr_block?: rstring
    from_port: rnumber
    icmp_code?: rnumber
    icmp_type?: rnumber
    ipv6_cidr_block?: rstring
    protocol: rstring
    rule_no: rnumber
    to_port: rnumber
}

export interface _aws_network_acl__ingress {
    action: rstring
    cidr_block?: rstring
    from_port: rnumber
    icmp_code?: rnumber
    icmp_type?: rnumber
    ipv6_cidr_block?: rstring
    protocol: rstring
    rule_no: rnumber
    to_port: rnumber
}

export interface aws_network_acl_config {
    egress?: _aws_network_acl__egress[]
    ingress?: _aws_network_acl__ingress[]
    owner_id?: rstring
    subnet_id?: rstring
    subnet_ids?: rstring[]
    tags?: {[propName: string]: rstring}
    vpc_id: rstring
}

export class aws_network_acl implements Resource {
    config: aws_network_acl_config
    private _is_data: boolean = false
    private _name: string = "aws_network_acl"
    private _id: string;
    constructor(id: string, config: aws_network_acl_config) {
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
    
    get ref_egress(): Reference<_aws_network_acl__egress[]> {
        return new Reference(`${this._name}.${this._id}.egress`)
    }
    get ref_ingress(): Reference<_aws_network_acl__ingress[]> {
        return new Reference(`${this._name}.${this._id}.ingress`)
    }
    get ref_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner_id`)
    }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subnet_id`)
    }
    get ref_subnet_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.subnet_ids`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

