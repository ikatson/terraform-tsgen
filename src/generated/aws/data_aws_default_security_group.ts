import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_default_security_group__egress {
    cidr_blocks?: rstring[]
    description?: rstring
    from_port: rnumber
    ipv6_cidr_blocks?: rstring[]
    prefix_list_ids?: rstring[]
    protocol: rstring
    security_groups?: rstring[]
    self?: rboolean
    to_port: rnumber
}

export interface _data_aws_default_security_group__ingress {
    cidr_blocks?: rstring[]
    description?: rstring
    from_port: rnumber
    ipv6_cidr_blocks?: rstring[]
    prefix_list_ids?: rstring[]
    protocol: rstring
    security_groups?: rstring[]
    self?: rboolean
    to_port: rnumber
}

export interface data_aws_default_security_group_config {
    arn?: rstring
    egress?: _data_aws_default_security_group__egress[]
    ingress?: _data_aws_default_security_group__ingress[]
    name?: rstring
    owner_id?: rstring
    revoke_rules_on_delete?: rboolean
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class data_aws_default_security_group implements Data {
    config: data_aws_default_security_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_default_security_group"
    private _id: string;
    constructor(id: string, config: data_aws_default_security_group_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_egress(): Reference<_data_aws_default_security_group__egress[]> {
        return new Reference(`data.${this._name}.${this._id}.egress`)
  }
    get ref_ingress(): Reference<_data_aws_default_security_group__ingress[]> {
        return new Reference(`data.${this._name}.${this._id}.ingress`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_revoke_rules_on_delete(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.revoke_rules_on_delete`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

