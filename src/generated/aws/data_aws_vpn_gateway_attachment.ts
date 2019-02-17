import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_vpn_gateway_attachment_config {
    vpc_id: rstring
    vpn_gateway_id: rstring
}

export class data_aws_vpn_gateway_attachment implements Data {
    config: data_aws_vpn_gateway_attachment_config
    private _is_data: boolean = true
    private _name: string = "data_aws_vpn_gateway_attachment"
    private _id: string;
    constructor(id: string, config: data_aws_vpn_gateway_attachment_config) {
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
    
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
    get ref_vpn_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpn_gateway_id`)
  }
}

