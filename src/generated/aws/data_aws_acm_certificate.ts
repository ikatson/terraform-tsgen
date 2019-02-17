import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_acm_certificate_config {
    arn?: rstring
    domain: rstring
    most_recent?: rboolean
    statuses?: rstring[]
    types?: rstring[]
}

export class data_aws_acm_certificate implements Data {
    config: data_aws_acm_certificate_config
    private _is_data: boolean = true
    private _name: string = "aws_acm_certificate"
    private _id: string;
    constructor(id: string, config: data_aws_acm_certificate_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_domain(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.domain`)
  }
    get ref_most_recent(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.most_recent`)
  }
    get ref_statuses(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.statuses`)
  }
    get ref_types(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.types`)
  }
}

