import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_waf_byte_match_set__byte_match_tuples__field_to_match {
    data?: rstring
    type: rstring
}

export interface _aws_waf_byte_match_set__byte_match_tuples {
    field_to_match: __aws_waf_byte_match_set__byte_match_tuples__field_to_match[]
    positional_constraint: rstring
    target_string?: rstring
    text_transformation: rstring
}

export interface aws_waf_byte_match_set_config {
    byte_match_tuples?: _aws_waf_byte_match_set__byte_match_tuples[]
    name: rstring
}

export class aws_waf_byte_match_set implements Resource {
    config: aws_waf_byte_match_set_config
    private _is_data: boolean = false
    private _name: string = "aws_waf_byte_match_set"
    private _id: string;
    constructor(id: string, config: aws_waf_byte_match_set_config) {
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
    
    get ref_byte_match_tuples(): Reference<_aws_waf_byte_match_set__byte_match_tuples[]> {
        return new Reference(`${this._name}.${this._id}.byte_match_tuples`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

