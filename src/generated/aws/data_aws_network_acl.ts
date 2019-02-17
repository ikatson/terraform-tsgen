import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_network_acl__egress {
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

export interface _data_aws_network_acl__ingress {
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

export interface data_aws_network_acl_config {
    egress?: _data_aws_network_acl__egress[]
    ingress?: _data_aws_network_acl__ingress[]
    owner_id?: rstring
    subnet_id?: rstring
    subnet_ids?: rstring[]
    tags?: {[propName: string]: rstring}
    vpc_id: rstring
}

export class data_aws_network_acl implements Data {
    config: data_aws_network_acl_config
    private _is_data: boolean = true
    private _name: string = "data_aws_network_acl"
    private _id: string;
    constructor(id: string, config: data_aws_network_acl_config) {
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
    
    get ref_egress(): Reference<_data_aws_network_acl__egress[]> {
        return new Reference(`data.${this._name}.${this._id}.egress`)
  }
    get ref_ingress(): Reference<_data_aws_network_acl__ingress[]> {
        return new Reference(`data.${this._name}.${this._id}.ingress`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subnet_id`)
  }
    get ref_subnet_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.subnet_ids`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

