import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ec2_transit_gateway_route_config {
    destination_cidr_block: rstring
    transit_gateway_attachment_id: rstring
    transit_gateway_route_table_id: rstring
}

export class data_aws_ec2_transit_gateway_route implements Data {
    config: data_aws_ec2_transit_gateway_route_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ec2_transit_gateway_route"
    private _id: string;
    constructor(id: string, config: data_aws_ec2_transit_gateway_route_config) {
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
        return new Reference(`data.${this._name}.${this._id}.destination_cidr_block`)
  }
    get ref_transit_gateway_attachment_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.transit_gateway_attachment_id`)
  }
    get ref_transit_gateway_route_table_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.transit_gateway_route_table_id`)
  }
}

