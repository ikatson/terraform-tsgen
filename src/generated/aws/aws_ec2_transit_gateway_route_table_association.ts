import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ec2_transit_gateway_route_table_association_config {
    resource_id?: rstring
    resource_type?: rstring
    transit_gateway_attachment_id: rstring
    transit_gateway_route_table_id: rstring
}

export class aws_ec2_transit_gateway_route_table_association implements Resource {
    config: aws_ec2_transit_gateway_route_table_association_config
    private _is_data: boolean = false
    private _name: string = "aws_ec2_transit_gateway_route_table_association"
    private _id: string;
    constructor(id: string, config: aws_ec2_transit_gateway_route_table_association_config) {
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
    
    get ref_resource_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_id`)
    }
    get ref_resource_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_type`)
    }
    get ref_transit_gateway_attachment_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.transit_gateway_attachment_id`)
    }
    get ref_transit_gateway_route_table_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.transit_gateway_route_table_id`)
    }
}

