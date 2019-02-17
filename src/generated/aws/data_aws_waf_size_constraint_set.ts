import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_waf_size_constraint_set__size_constraints__field_to_match {
    data?: rstring
    type: rstring
}

export interface _data_aws_waf_size_constraint_set__size_constraints {
    comparison_operator: rstring
    field_to_match: __data_aws_waf_size_constraint_set__size_constraints__field_to_match[]
    size: rnumber
    text_transformation: rstring
}

export interface data_aws_waf_size_constraint_set_config {
    name: rstring
    size_constraints?: _data_aws_waf_size_constraint_set__size_constraints[]
}

export class data_aws_waf_size_constraint_set implements Data {
    config: data_aws_waf_size_constraint_set_config
    private _is_data: boolean = true
    private _name: string = "data_aws_waf_size_constraint_set"
    private _id: string;
    constructor(id: string, config: data_aws_waf_size_constraint_set_config) {
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
    get ref_size_constraints(): Reference<_data_aws_waf_size_constraint_set__size_constraints[]> {
        return new Reference(`data.${this._name}.${this._id}.size_constraints`)
  }
}

