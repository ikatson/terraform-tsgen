import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_vpc_ipv4_cidr_block_association_config {
    cidr_block: rstring
    vpc_id: rstring
}

export class aws_vpc_ipv4_cidr_block_association implements Resource {
    config: aws_vpc_ipv4_cidr_block_association_config
    private _is_data: boolean = false
    private _name: string = "aws_vpc_ipv4_cidr_block_association"
    private _id: string;
    constructor(id: string, config: aws_vpc_ipv4_cidr_block_association_config) {
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
    
    get ref_cidr_block(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cidr_block`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

