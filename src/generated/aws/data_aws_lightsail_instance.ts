import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_lightsail_instance_config {
    arn?: rstring
    availability_zone: rstring
    blueprint_id: rstring
    bundle_id: rstring
    cpu_count?: rnumber
    created_at?: rstring
    ipv6_address?: rstring
    is_static_ip?: rboolean
    key_pair_name?: rstring
    name: rstring
    private_ip_address?: rstring
    public_ip_address?: rstring
    ram_size?: rnumber
    user_data?: rstring
    username?: rstring
}

export class data_aws_lightsail_instance implements Data {
    config: data_aws_lightsail_instance_config
    private _is_data: boolean = true
    private _name: string = "data_aws_lightsail_instance"
    private _id: string;
    constructor(id: string, config: data_aws_lightsail_instance_config) {
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
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_blueprint_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.blueprint_id`)
  }
    get ref_bundle_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bundle_id`)
  }
    get ref_cpu_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.cpu_count`)
  }
    get ref_created_at(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.created_at`)
  }
    get ref_ipv6_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ipv6_address`)
  }
    get ref_is_static_ip(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.is_static_ip`)
  }
    get ref_key_pair_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_pair_name`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_private_ip_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_ip_address`)
  }
    get ref_public_ip_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.public_ip_address`)
  }
    get ref_ram_size(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.ram_size`)
  }
    get ref_user_data(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_data`)
  }
    get ref_username(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.username`)
  }
}

