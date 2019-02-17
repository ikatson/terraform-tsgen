import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_cloudwatch_event_permission__condition {
    key: rstring
    type: rstring
    value: rstring
}

export interface data_aws_cloudwatch_event_permission_config {
    action?: rstring
    condition?: _data_aws_cloudwatch_event_permission__condition[]
    principal: rstring
    statement_id: rstring
}

export class data_aws_cloudwatch_event_permission implements Data {
    config: data_aws_cloudwatch_event_permission_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cloudwatch_event_permission"
    private _id: string;
    constructor(id: string, config: data_aws_cloudwatch_event_permission_config) {
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
    get ref_condition(): Reference<_data_aws_cloudwatch_event_permission__condition[]> {
        return new Reference(`data.${this._name}.${this._id}.condition`)
  }
    get ref_principal(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.principal`)
  }
    get ref_statement_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.statement_id`)
  }
}

