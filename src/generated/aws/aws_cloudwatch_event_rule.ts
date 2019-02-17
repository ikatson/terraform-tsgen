import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloudwatch_event_rule_config {
    arn?: rstring
    description?: rstring
    event_pattern?: rstring
    is_enabled?: rboolean
    name?: rstring
    name_prefix?: rstring
    role_arn?: rstring
    schedule_expression?: rstring
}

export class aws_cloudwatch_event_rule implements Resource {
    config: aws_cloudwatch_event_rule_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudwatch_event_rule"
    private _id: string;
    constructor(id: string, config: aws_cloudwatch_event_rule_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_event_pattern(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.event_pattern`)
    }
    get ref_is_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.is_enabled`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_arn`)
    }
    get ref_schedule_expression(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.schedule_expression`)
    }
}

