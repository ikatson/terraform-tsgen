import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_waf_byte_match_set__byte_match_tuples__field_to_match {
    data?: rstring
    type: rstring
}

export interface _data_aws_waf_byte_match_set__byte_match_tuples {
    field_to_match: __data_aws_waf_byte_match_set__byte_match_tuples__field_to_match[]
    positional_constraint: rstring
    target_string?: rstring
    text_transformation: rstring
}

export interface data_aws_waf_byte_match_set_config {
    byte_match_tuples?: _data_aws_waf_byte_match_set__byte_match_tuples[]
    name: rstring
}

export class data_aws_waf_byte_match_set implements Data {
    config: data_aws_waf_byte_match_set_config
    private _is_data: boolean = true
    private _name: string = "data_aws_waf_byte_match_set"
    private _id: string;
    constructor(id: string, config: data_aws_waf_byte_match_set_config) {
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
    
    get ref_byte_match_tuples(): Reference<_data_aws_waf_byte_match_set__byte_match_tuples[]> {
        return new Reference(`data.${this._name}.${this._id}.byte_match_tuples`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

