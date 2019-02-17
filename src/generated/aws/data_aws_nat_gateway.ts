import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_nat_gateway__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_nat_gateway_config {
    allocation_id?: rstring
    filter?: _data_aws_nat_gateway__filter[]
    id?: rstring
    network_interface_id?: rstring
    private_ip?: rstring
    public_ip?: rstring
    state?: rstring
    subnet_id?: rstring
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class data_aws_nat_gateway implements Data {
    config: data_aws_nat_gateway_config
    private _is_data: boolean = true
    private _name: string = "aws_nat_gateway"
    private _id: string;
    constructor(id: string, config: data_aws_nat_gateway_config) {
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
    get ref_filter(): Reference<_data_aws_nat_gateway__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_id`)
  }
    get ref_private_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_ip`)
  }
    get ref_public_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.public_ip`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
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

