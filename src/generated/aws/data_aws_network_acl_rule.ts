import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_network_acl_rule_config {
    cidr_block?: rstring
    egress?: rboolean
    from_port?: rnumber
    icmp_code?: rstring
    icmp_type?: rstring
    ipv6_cidr_block?: rstring
    network_acl_id: rstring
    protocol: rstring
    rule_action: rstring
    rule_number: rnumber
    to_port?: rnumber
}

export class data_aws_network_acl_rule implements Data {
    config: data_aws_network_acl_rule_config
    private _is_data: boolean = true
    private _name: string = "data_aws_network_acl_rule"
    private _id: string;
    constructor(id: string, config: data_aws_network_acl_rule_config) {
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
    
    get ref_cidr_block(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cidr_block`)
  }
    get ref_egress(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.egress`)
  }
    get ref_from_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.from_port`)
  }
    get ref_icmp_code(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.icmp_code`)
  }
    get ref_icmp_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.icmp_type`)
  }
    get ref_ipv6_cidr_block(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ipv6_cidr_block`)
  }
    get ref_network_acl_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_acl_id`)
  }
    get ref_protocol(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.protocol`)
  }
    get ref_rule_action(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rule_action`)
  }
    get ref_rule_number(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.rule_number`)
  }
    get ref_to_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.to_port`)
  }
}

