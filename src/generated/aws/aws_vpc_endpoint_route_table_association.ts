import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_vpc_endpoint_route_table_association_config {
    route_table_id: rstring
    vpc_endpoint_id: rstring
}

export class aws_vpc_endpoint_route_table_association implements Resource {
    config: aws_vpc_endpoint_route_table_association_config
    private _is_data: boolean = false
    private _name: string = "aws_vpc_endpoint_route_table_association"
    private _id: string;
    constructor(id: string, config: aws_vpc_endpoint_route_table_association_config) {
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
    get ref_vpc_endpoint_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_endpoint_id`)
    }
}

