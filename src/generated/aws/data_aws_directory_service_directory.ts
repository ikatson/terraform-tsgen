import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_directory_service_directory__connect_settings {
    customer_dns_ips: rstring[]
    customer_username: rstring
    subnet_ids: rstring[]
    vpc_id: rstring
}

export interface _data_aws_directory_service_directory__vpc_settings {
    subnet_ids: rstring[]
    vpc_id: rstring
}

export interface data_aws_directory_service_directory_config {
    access_url?: rstring
    alias?: rstring
    connect_settings?: _data_aws_directory_service_directory__connect_settings[]
    description?: rstring
    dns_ip_addresses?: rstring[]
    edition?: rstring
    enable_sso?: rboolean
    name: rstring
    password: rstring
    security_group_id?: rstring
    short_name?: rstring
    size?: rstring
    tags?: {[propName: string]: rstring}
    type?: rstring
    vpc_settings?: _data_aws_directory_service_directory__vpc_settings[]
}

export class data_aws_directory_service_directory implements Data {
    config: data_aws_directory_service_directory_config
    private _is_data: boolean = true
    private _name: string = "data_aws_directory_service_directory"
    private _id: string;
    constructor(id: string, config: data_aws_directory_service_directory_config) {
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
    
    get ref_access_url(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.access_url`)
  }
    get ref_alias(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.alias`)
  }
    get ref_connect_settings(): Reference<_data_aws_directory_service_directory__connect_settings[]> {
        return new Reference(`data.${this._name}.${this._id}.connect_settings`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_dns_ip_addresses(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.dns_ip_addresses`)
  }
    get ref_edition(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.edition`)
  }
    get ref_enable_sso(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enable_sso`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_password(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.password`)
  }
    get ref_security_group_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.security_group_id`)
  }
    get ref_short_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.short_name`)
  }
    get ref_size(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.size`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
    get ref_vpc_settings(): Reference<_data_aws_directory_service_directory__vpc_settings[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_settings`)
  }
}

