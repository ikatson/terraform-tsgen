import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_lambda_invocation_config {
    function_name: rstring
    input: rstring
    qualifier?: rstring
    result?: rstring
    result_map?: {[propName: string]: rstring}
}

export class data_aws_lambda_invocation implements Data {
    config: data_aws_lambda_invocation_config
    private _is_data: boolean = true
    private _name: string = "aws_lambda_invocation"
    private _id: string;
    constructor(id: string, config: data_aws_lambda_invocation_config) {
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
    
    get ref_function_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.function_name`)
  }
    get ref_input(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.input`)
  }
    get ref_qualifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.qualifier`)
  }
    get ref_result(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.result`)
  }
    get ref_result_map(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.result_map`)
  }
}

