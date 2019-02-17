import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_glue_trigger__actions {
    arguments?: {[propName: string]: rstring}
    job_name: rstring
    timeout?: rnumber
}

export interface __data_aws_glue_trigger__predicate__conditions {
    job_name: rstring
    logical_operator?: rstring
    state: rstring
}

export interface _data_aws_glue_trigger__predicate {
    conditions: __data_aws_glue_trigger__predicate__conditions[]
    logical?: rstring
}

export interface data_aws_glue_trigger_config {
    actions: _data_aws_glue_trigger__actions[]
    description?: rstring
    enabled?: rboolean
    name: rstring
    predicate?: _data_aws_glue_trigger__predicate[]
    schedule?: rstring
    type: rstring
}

export class data_aws_glue_trigger implements Data {
    config: data_aws_glue_trigger_config
    private _is_data: boolean = true
    private _name: string = "data_aws_glue_trigger"
    private _id: string;
    constructor(id: string, config: data_aws_glue_trigger_config) {
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
    
    get ref_actions(): Reference<_data_aws_glue_trigger__actions[]> {
        return new Reference(`data.${this._name}.${this._id}.actions`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enabled`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_predicate(): Reference<_data_aws_glue_trigger__predicate[]> {
        return new Reference(`data.${this._name}.${this._id}.predicate`)
  }
    get ref_schedule(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.schedule`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

