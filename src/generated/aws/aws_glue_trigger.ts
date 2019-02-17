import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_glue_trigger__actions {
    arguments?: {[propName: string]: rstring}
    job_name: rstring
    timeout?: rnumber
}

export interface __aws_glue_trigger__predicate__conditions {
    job_name: rstring
    logical_operator?: rstring
    state: rstring
}

export interface _aws_glue_trigger__predicate {
    conditions: __aws_glue_trigger__predicate__conditions[]
    logical?: rstring
}

export interface aws_glue_trigger_config {
    actions: _aws_glue_trigger__actions[]
    description?: rstring
    enabled?: rboolean
    name: rstring
    predicate?: _aws_glue_trigger__predicate[]
    schedule?: rstring
    type: rstring
}

export class aws_glue_trigger implements Resource {
    config: aws_glue_trigger_config
    private _is_data: boolean = false
    private _name: string = "aws_glue_trigger"
    private _id: string;
    constructor(id: string, config: aws_glue_trigger_config) {
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
    
    get ref_actions(): Reference<_aws_glue_trigger__actions[]> {
        return new Reference(`${this._name}.${this._id}.actions`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_predicate(): Reference<_aws_glue_trigger__predicate[]> {
        return new Reference(`${this._name}.${this._id}.predicate`)
    }
    get ref_schedule(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.schedule`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
}

