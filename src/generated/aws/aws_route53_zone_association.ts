import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_route53_zone_association_config {
    vpc_id: rstring
    vpc_region?: rstring
    zone_id: rstring
}

export class aws_route53_zone_association implements Resource {
    config: aws_route53_zone_association_config
    private _is_data: boolean = false
    private _name: string = "aws_route53_zone_association"
    private _id: string;
    constructor(id: string, config: aws_route53_zone_association_config) {
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
    
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
    get ref_vpc_region(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_region`)
    }
    get ref_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.zone_id`)
    }
}

