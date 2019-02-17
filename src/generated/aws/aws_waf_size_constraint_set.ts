import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_waf_size_constraint_set__size_constraints__field_to_match {
    data?: rstring
    type: rstring
}

export interface _aws_waf_size_constraint_set__size_constraints {
    comparison_operator: rstring
    field_to_match: __aws_waf_size_constraint_set__size_constraints__field_to_match[]
    size: rnumber
    text_transformation: rstring
}

export interface aws_waf_size_constraint_set_config {
    name: rstring
    size_constraints?: _aws_waf_size_constraint_set__size_constraints[]
}

export class aws_waf_size_constraint_set implements Resource {
    config: aws_waf_size_constraint_set_config
    private _is_data: boolean = false
    private _name: string = "aws_waf_size_constraint_set"
    private _id: string;
    constructor(id: string, config: aws_waf_size_constraint_set_config) {
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
    get ref_size_constraints(): Reference<_aws_waf_size_constraint_set__size_constraints[]> {
        return new Reference(`${this._name}.${this._id}.size_constraints`)
    }
}

