import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_vpn_gateway__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_vpn_gateway_config {
    amazon_side_asn?: rstring
    attached_vpc_id?: rstring
    availability_zone?: rstring
    filter?: _data_aws_vpn_gateway__filter[]
    id?: rstring
    state?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_vpn_gateway implements Data {
    config: data_aws_vpn_gateway_config
    private _is_data: boolean = true
    private _name: string = "aws_vpn_gateway"
    private _id: string;
    constructor(id: string, config: data_aws_vpn_gateway_config) {
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
    
    get ref_amazon_side_asn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.amazon_side_asn`)
  }
    get ref_attached_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.attached_vpc_id`)
  }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_filter(): Reference<_data_aws_vpn_gateway__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

