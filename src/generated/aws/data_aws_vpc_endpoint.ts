import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_vpc_endpoint__dns_entry {
    dns_name?: rstring
    hosted_zone_id?: rstring
}

export interface data_aws_vpc_endpoint_config {
    cidr_blocks?: rstring[]
    dns_entry?: _data_aws_vpc_endpoint__dns_entry[]
    id?: rstring
    network_interface_ids?: rstring[]
    policy?: rstring
    prefix_list_id?: rstring
    private_dns_enabled?: rboolean
    route_table_ids?: rstring[]
    security_group_ids?: rstring[]
    service_name?: rstring
    state?: rstring
    subnet_ids?: rstring[]
    vpc_endpoint_type?: rstring
    vpc_id?: rstring
}

export class data_aws_vpc_endpoint implements Data {
    config: data_aws_vpc_endpoint_config
    private _is_data: boolean = true
    private _name: string = "aws_vpc_endpoint"
    private _id: string;
    constructor(id: string, config: data_aws_vpc_endpoint_config) {
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
    get ref_dns_entry(): Reference<_data_aws_vpc_endpoint__dns_entry[]> {
        return new Reference(`data.${this._name}.${this._id}.dns_entry`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_network_interface_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_ids`)
  }
    get ref_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy`)
  }
    get ref_prefix_list_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.prefix_list_id`)
  }
    get ref_private_dns_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.private_dns_enabled`)
  }
    get ref_route_table_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.route_table_ids`)
  }
    get ref_security_group_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_group_ids`)
  }
    get ref_service_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_name`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
  }
    get ref_subnet_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.subnet_ids`)
  }
    get ref_vpc_endpoint_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_endpoint_type`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

