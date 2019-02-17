import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_route53_delegation_set_config {
    caller_reference?: rstring
    id: rstring
    name_servers?: rstring[]
}

export class data_aws_route53_delegation_set implements Data {
    config: data_aws_route53_delegation_set_config
    private _is_data: boolean = true
    private _name: string = "aws_route53_delegation_set"
    private _id: string;
    constructor(id: string, config: data_aws_route53_delegation_set_config) {
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
    
    get ref_caller_reference(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.caller_reference`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_name_servers(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.name_servers`)
  }
}

