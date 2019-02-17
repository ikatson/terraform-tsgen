import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_vpn_gateway_route_propagation_config {
    route_table_id: rstring
    vpn_gateway_id: rstring
}

export class aws_vpn_gateway_route_propagation implements Resource {
    config: aws_vpn_gateway_route_propagation_config
    private _is_data: boolean = false
    private _name: string = "aws_vpn_gateway_route_propagation"
    private _id: string;
    constructor(id: string, config: aws_vpn_gateway_route_propagation_config) {
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
    
    get ref_route_table_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.route_table_id`)
    }
    get ref_vpn_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpn_gateway_id`)
    }
}

