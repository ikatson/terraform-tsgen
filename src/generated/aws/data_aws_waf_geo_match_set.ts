import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_waf_geo_match_set__geo_match_constraint {
    type: rstring
    value: rstring
}

export interface data_aws_waf_geo_match_set_config {
    geo_match_constraint?: _data_aws_waf_geo_match_set__geo_match_constraint[]
    name: rstring
}

export class data_aws_waf_geo_match_set implements Data {
    config: data_aws_waf_geo_match_set_config
    private _is_data: boolean = true
    private _name: string = "data_aws_waf_geo_match_set"
    private _id: string;
    constructor(id: string, config: data_aws_waf_geo_match_set_config) {
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
    
    get ref_geo_match_constraint(): Reference<_data_aws_waf_geo_match_set__geo_match_constraint[]> {
        return new Reference(`data.${this._name}.${this._id}.geo_match_constraint`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

