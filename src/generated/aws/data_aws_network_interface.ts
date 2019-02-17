import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_network_interface__association {
    allocation_id?: rstring
    association_id?: rstring
    ip_owner_id?: rstring
    public_dns_name?: rstring
    public_ip?: rstring
}

export interface _data_aws_network_interface__attachment {
    attachment_id?: rstring
    device_index?: rnumber
    instance_id?: rstring
    instance_owner_id?: rstring
}

export interface _data_aws_network_interface__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_network_interface_config {
    association?: _data_aws_network_interface__association[]
    attachment?: _data_aws_network_interface__attachment[]
    availability_zone?: rstring
    description?: rstring
    filter?: _data_aws_network_interface__filter[]
    id?: rstring
    interface_type?: rstring
    ipv6_addresses?: rstring[]
    mac_address?: rstring
    owner_id?: rstring
    private_dns_name?: rstring
    private_ip?: rstring
    private_ips?: rstring[]
    requester_id?: rstring
    security_groups?: rstring[]
    subnet_id?: rstring
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class data_aws_network_interface implements Data {
    config: data_aws_network_interface_config
    private _is_data: boolean = true
    private _name: string = "aws_network_interface"
    private _id: string;
    constructor(id: string, config: data_aws_network_interface_config) {
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
    
    get ref_association(): Reference<_data_aws_network_interface__association[]> {
        return new Reference(`data.${this._name}.${this._id}.association`)
  }
    get ref_attachment(): Reference<_data_aws_network_interface__attachment[]> {
        return new Reference(`data.${this._name}.${this._id}.attachment`)
  }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_filter(): Reference<_data_aws_network_interface__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_interface_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.interface_type`)
  }
    get ref_ipv6_addresses(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ipv6_addresses`)
  }
    get ref_mac_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.mac_address`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_private_dns_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_dns_name`)
  }
    get ref_private_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_ip`)
  }
    get ref_private_ips(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.private_ips`)
  }
    get ref_requester_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.requester_id`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subnet_id`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

