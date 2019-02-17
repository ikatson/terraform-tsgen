import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_wafregional_xss_match_set__xss_match_tuple__field_to_match {
    data?: rstring
    type: rstring
}

export interface _aws_wafregional_xss_match_set__xss_match_tuple {
    field_to_match: __aws_wafregional_xss_match_set__xss_match_tuple__field_to_match[]
    text_transformation: rstring
}

export interface aws_wafregional_xss_match_set_config {
    name: rstring
    xss_match_tuple?: _aws_wafregional_xss_match_set__xss_match_tuple[]
}

export class aws_wafregional_xss_match_set implements Resource {
    config: aws_wafregional_xss_match_set_config
    private _is_data: boolean = false
    private _name: string = "aws_wafregional_xss_match_set"
    private _id: string;
    constructor(id: string, config: aws_wafregional_xss_match_set_config) {
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
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_xss_match_tuple(): Reference<_aws_wafregional_xss_match_set__xss_match_tuple[]> {
        return new Reference(`${this._name}.${this._id}.xss_match_tuple`)
    }
}

