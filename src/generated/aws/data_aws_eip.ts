import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_eip__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_eip_config {
    association_id?: rstring
    domain?: rstring
    filter?: _data_aws_eip__filter[]
    id?: rstring
    instance_id?: rstring
    network_interface_id?: rstring
    network_interface_owner_id?: rstring
    private_ip?: rstring
    public_ip?: rstring
    public_ipv4_pool?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_eip implements Data {
    config: data_aws_eip_config
    private _is_data: boolean = true
    private _name: string = "aws_eip"
    private _id: string;
    constructor(id: string, config: data_aws_eip_config) {
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
    
    get ref_association_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.association_id`)
  }
    get ref_domain(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.domain`)
  }
    get ref_filter(): Reference<_data_aws_eip__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_instance_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_id`)
  }
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_id`)
  }
    get ref_network_interface_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_owner_id`)
  }
    get ref_private_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_ip`)
  }
    get ref_public_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.public_ip`)
  }
    get ref_public_ipv4_pool(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.public_ipv4_pool`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

