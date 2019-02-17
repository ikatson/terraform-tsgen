import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_vpc__cidr_block_associations {
    association_id?: rstring
    cidr_block?: rstring
    state?: rstring
}

export interface _data_aws_vpc__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_vpc_config {
    arn?: rstring
    cidr_block?: rstring
    cidr_block_associations?: _data_aws_vpc__cidr_block_associations[]
    default?: rboolean
    dhcp_options_id?: rstring
    enable_dns_hostnames?: rboolean
    enable_dns_support?: rboolean
    filter?: _data_aws_vpc__filter[]
    id?: rstring
    instance_tenancy?: rstring
    ipv6_association_id?: rstring
    ipv6_cidr_block?: rstring
    main_route_table_id?: rstring
    owner_id?: rstring
    state?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_vpc implements Data {
    config: data_aws_vpc_config
    private _is_data: boolean = true
    private _name: string = "aws_vpc"
    private _id: string;
    constructor(id: string, config: data_aws_vpc_config) {
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
    get ref_cidr_block(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cidr_block`)
  }
    get ref_cidr_block_associations(): Reference<_data_aws_vpc__cidr_block_associations[]> {
        return new Reference(`data.${this._name}.${this._id}.cidr_block_associations`)
  }
    get ref_default(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.default`)
  }
    get ref_dhcp_options_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.dhcp_options_id`)
  }
    get ref_enable_dns_hostnames(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enable_dns_hostnames`)
  }
    get ref_enable_dns_support(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enable_dns_support`)
  }
    get ref_filter(): Reference<_data_aws_vpc__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_instance_tenancy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_tenancy`)
  }
    get ref_ipv6_association_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ipv6_association_id`)
  }
    get ref_ipv6_cidr_block(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ipv6_cidr_block`)
  }
    get ref_main_route_table_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.main_route_table_id`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

