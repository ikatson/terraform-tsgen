import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_route53_delegation_set_config {
    name_servers?: rstring[]
    reference_name?: rstring
}

export class aws_route53_delegation_set implements Resource {
    config: aws_route53_delegation_set_config
    private _is_data: boolean = false
    private _name: string = "aws_route53_delegation_set"
    private _id: string;
    constructor(id: string, config: aws_route53_delegation_set_config) {
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
    
    get ref_name_servers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.name_servers`)
    }
    get ref_reference_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.reference_name`)
    }
}

