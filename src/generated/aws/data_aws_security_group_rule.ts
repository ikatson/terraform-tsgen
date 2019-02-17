import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_security_group_rule_config {
    cidr_blocks?: rstring[]
    description?: rstring
    from_port: rnumber
    ipv6_cidr_blocks?: rstring[]
    prefix_list_ids?: rstring[]
    protocol: rstring
    security_group_id: rstring
    self?: rboolean
    source_security_group_id?: rstring
    to_port: rnumber
    /**
     * Type of rule, ingress (inbound) or egress (outbound).    
     */
    type: rstring
}

export class data_aws_security_group_rule implements Data {
    config: data_aws_security_group_rule_config
    private _is_data: boolean = true
    private _name: string = "data_aws_security_group_rule"
    private _id: string;
    constructor(id: string, config: data_aws_security_group_rule_config) {
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
    
    get ref_cidr_blocks(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.cidr_blocks`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_from_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.from_port`)
  }
    get ref_ipv6_cidr_blocks(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ipv6_cidr_blocks`)
  }
    get ref_prefix_list_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.prefix_list_ids`)
  }
    get ref_protocol(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.protocol`)
  }
    get ref_security_group_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.security_group_id`)
  }
    get ref_self(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.self`)
  }
    get ref_source_security_group_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_security_group_id`)
  }
    get ref_to_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.to_port`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

