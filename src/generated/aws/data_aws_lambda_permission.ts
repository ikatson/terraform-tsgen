import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_lambda_permission_config {
    action: rstring
    event_source_token?: rstring
    function_name: rstring
    principal: rstring
    qualifier?: rstring
    source_account?: rstring
    source_arn?: rstring
    statement_id?: rstring
    statement_id_prefix?: rstring
}

export class data_aws_lambda_permission implements Data {
    config: data_aws_lambda_permission_config
    private _is_data: boolean = true
    private _name: string = "data_aws_lambda_permission"
    private _id: string;
    constructor(id: string, config: data_aws_lambda_permission_config) {
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
    
    get ref_action(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.action`)
  }
    get ref_event_source_token(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.event_source_token`)
  }
    get ref_function_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.function_name`)
  }
    get ref_principal(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.principal`)
  }
    get ref_qualifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.qualifier`)
  }
    get ref_source_account(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_account`)
  }
    get ref_source_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_arn`)
  }
    get ref_statement_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.statement_id`)
  }
    get ref_statement_id_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.statement_id_prefix`)
  }
}

