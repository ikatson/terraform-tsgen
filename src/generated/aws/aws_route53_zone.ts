import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_route53_zone__vpc {
    vpc_id: rstring
    vpc_region?: rstring
}

export interface aws_route53_zone_config {
    comment?: rstring
    delegation_set_id?: rstring
    force_destroy?: rboolean
    name: rstring
    name_servers?: rstring[]
    tags?: {[propName: string]: rstring}
    vpc?: _aws_route53_zone__vpc[]
    vpc_id?: rstring
    vpc_region?: rstring
    zone_id?: rstring
}

export class aws_route53_zone implements Resource {
    config: aws_route53_zone_config
    private _is_data: boolean = false
    private _name: string = "aws_route53_zone"
    private _id: string;
    constructor(id: string, config: aws_route53_zone_config) {
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
    
    get ref_comment(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.comment`)
    }
    get ref_delegation_set_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.delegation_set_id`)
    }
    get ref_force_destroy(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.force_destroy`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_servers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.name_servers`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc(): Reference<_aws_route53_zone__vpc[]> {
        return new Reference(`${this._name}.${this._id}.vpc`)
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

