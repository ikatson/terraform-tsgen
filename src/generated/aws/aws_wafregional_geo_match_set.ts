import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_wafregional_geo_match_set__geo_match_constraint {
    type: rstring
    value: rstring
}

export interface aws_wafregional_geo_match_set_config {
    geo_match_constraint?: _aws_wafregional_geo_match_set__geo_match_constraint[]
    name: rstring
}

export class aws_wafregional_geo_match_set implements Resource {
    config: aws_wafregional_geo_match_set_config
    private _is_data: boolean = false
    private _name: string = "aws_wafregional_geo_match_set"
    private _id: string;
    constructor(id: string, config: aws_wafregional_geo_match_set_config) {
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
    
    get ref_geo_match_constraint(): Reference<_aws_wafregional_geo_match_set__geo_match_constraint[]> {
        return new Reference(`${this._name}.${this._id}.geo_match_constraint`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

