import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_dx_hosted_private_virtual_interface_accepter_config {
    arn?: rstring
    dx_gateway_id?: rstring
    tags?: {[propName: string]: rstring}
    virtual_interface_id: rstring
    vpn_gateway_id?: rstring
}

export class data_aws_dx_hosted_private_virtual_interface_accepter implements Data {
    config: data_aws_dx_hosted_private_virtual_interface_accepter_config
    private _is_data: boolean = true
    private _name: string = "data_aws_dx_hosted_private_virtual_interface_accepter"
    private _id: string;
    constructor(id: string, config: data_aws_dx_hosted_private_virtual_interface_accepter_config) {
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
    get ref_dx_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.dx_gateway_id`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_virtual_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.virtual_interface_id`)
  }
    get ref_vpn_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpn_gateway_id`)
  }
}

