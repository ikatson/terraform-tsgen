import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_lightsail_domain_config {
    arn?: rstring
    domain_name: rstring
}

export class aws_lightsail_domain implements Resource {
    config: aws_lightsail_domain_config
    private _is_data: boolean = false
    private _name: string = "aws_lightsail_domain"
    private _id: string;
    constructor(id: string, config: aws_lightsail_domain_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain_name`)
    }
}

