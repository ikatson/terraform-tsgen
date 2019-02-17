import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_dx_gateway_association_config {
    dx_gateway_id: rstring
    vpn_gateway_id: rstring
}

export class aws_dx_gateway_association implements Resource {
    config: aws_dx_gateway_association_config
    private _is_data: boolean = false
    private _name: string = "aws_dx_gateway_association"
    private _id: string;
    constructor(id: string, config: aws_dx_gateway_association_config) {
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
    
    get ref_dx_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dx_gateway_id`)
    }
    get ref_vpn_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpn_gateway_id`)
    }
}

