import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_waf_regex_pattern_set_config {
    name: rstring
    regex_pattern_strings?: rstring[]
}

export class data_aws_waf_regex_pattern_set implements Data {
    config: data_aws_waf_regex_pattern_set_config
    private _is_data: boolean = true
    private _name: string = "data_aws_waf_regex_pattern_set"
    private _id: string;
    constructor(id: string, config: data_aws_waf_regex_pattern_set_config) {
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
    
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_regex_pattern_strings(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.regex_pattern_strings`)
  }
}

