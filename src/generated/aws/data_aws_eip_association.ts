import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_eip_association_config {
    allocation_id?: rstring
    allow_reassociation?: rboolean
    instance_id?: rstring
    network_interface_id?: rstring
    private_ip_address?: rstring
    public_ip?: rstring
}

export class data_aws_eip_association implements Data {
    config: data_aws_eip_association_config
    private _is_data: boolean = true
    private _name: string = "data_aws_eip_association"
    private _id: string;
    constructor(id: string, config: data_aws_eip_association_config) {
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
    
    get ref_allocation_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.allocation_id`)
  }
    get ref_allow_reassociation(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.allow_reassociation`)
  }
    get ref_instance_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_id`)
  }
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_id`)
  }
    get ref_private_ip_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_ip_address`)
  }
    get ref_public_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.public_ip`)
  }
}

