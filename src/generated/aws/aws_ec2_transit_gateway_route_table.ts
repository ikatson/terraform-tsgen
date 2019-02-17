import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ec2_transit_gateway_route_table_config {
    default_association_route_table?: rboolean
    default_propagation_route_table?: rboolean
    tags?: {[propName: string]: rstring}
    transit_gateway_id: rstring
}

export class aws_ec2_transit_gateway_route_table implements Resource {
    config: aws_ec2_transit_gateway_route_table_config
    private _is_data: boolean = false
    private _name: string = "aws_ec2_transit_gateway_route_table"
    private _id: string;
    constructor(id: string, config: aws_ec2_transit_gateway_route_table_config) {
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
    
    get ref_default_association_route_table(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.default_association_route_table`)
    }
    get ref_default_propagation_route_table(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.default_propagation_route_table`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_transit_gateway_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.transit_gateway_id`)
    }
}

