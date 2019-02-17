import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_vpn_connection_route_config {
    destination_cidr_block: rstring
    vpn_connection_id: rstring
}

export class aws_vpn_connection_route implements Resource {
    config: aws_vpn_connection_route_config
    private _is_data: boolean = false
    private _name: string = "aws_vpn_connection_route"
    private _id: string;
    constructor(id: string, config: aws_vpn_connection_route_config) {
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
    
    get ref_destination_cidr_block(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.destination_cidr_block`)
    }
    get ref_vpn_connection_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpn_connection_id`)
    }
}

