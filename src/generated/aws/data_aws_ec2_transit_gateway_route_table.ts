import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_ec2_transit_gateway_route_table__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_ec2_transit_gateway_route_table_config {
    default_association_route_table?: rboolean
    default_propagation_route_table?: rboolean
    filter?: _data_aws_ec2_transit_gateway_route_table__filter[]
    id?: rstring
    tags?: {[propName: string]: rstring}
    transit_gateway_id?: rstring
}

export class data_aws_ec2_transit_gateway_route_table implements Data {
    config: data_aws_ec2_transit_gateway_route_table_config
    private _is_data: boolean = true
    private _name: string = "aws_ec2_transit_gateway_route_table"
    private _id: string;
    constructor(id: string, config: data_aws_ec2_transit_gateway_route_table_config) {
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
        return new Reference(`data.${this._name}.${this._id}.default_association_route_table`)
  }
    get ref_default_propagation_route_table(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.default_propagation_route_table`)
  }
    get ref_filter(): Reference<_data_aws_ec2_transit_gateway_route_table__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_transit_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.transit_gateway_id`)
  }
}

