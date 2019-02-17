import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_cloudwatch_event_permission__condition {
    key: rstring
    type: rstring
    value: rstring
}

export interface aws_cloudwatch_event_permission_config {
    action?: rstring
    condition?: _aws_cloudwatch_event_permission__condition[]
    principal: rstring
    statement_id: rstring
}

export class aws_cloudwatch_event_permission implements Resource {
    config: aws_cloudwatch_event_permission_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudwatch_event_permission"
    private _id: string;
    constructor(id: string, config: aws_cloudwatch_event_permission_config) {
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
        return new Reference(`${this._name}.${this._id}.action`)
    }
    get ref_condition(): Reference<_aws_cloudwatch_event_permission__condition[]> {
        return new Reference(`${this._name}.${this._id}.condition`)
    }
    get ref_principal(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.principal`)
    }
    get ref_statement_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.statement_id`)
    }
}

