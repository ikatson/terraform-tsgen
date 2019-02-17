import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_lambda_event_source_mapping_config {
    batch_size?: rnumber
    enabled?: rboolean
    event_source_arn: rstring
    function_arn?: rstring
    function_name: rstring
    last_modified?: rstring
    last_processing_result?: rstring
    starting_position?: rstring
    starting_position_timestamp?: rstring
    state?: rstring
    state_transition_reason?: rstring
    uuid?: rstring
}

export class aws_lambda_event_source_mapping implements Resource {
    config: aws_lambda_event_source_mapping_config
    private _is_data: boolean = false
    private _name: string = "aws_lambda_event_source_mapping"
    private _id: string;
    constructor(id: string, config: aws_lambda_event_source_mapping_config) {
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
    
    get ref_batch_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.batch_size`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_event_source_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.event_source_arn`)
    }
    get ref_function_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.function_arn`)
    }
    get ref_function_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.function_name`)
    }
    get ref_last_modified(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.last_modified`)
    }
    get ref_last_processing_result(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.last_processing_result`)
    }
    get ref_starting_position(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.starting_position`)
    }
    get ref_starting_position_timestamp(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.starting_position_timestamp`)
    }
    get ref_state(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.state`)
    }
    get ref_state_transition_reason(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.state_transition_reason`)
    }
    get ref_uuid(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.uuid`)
    }
}

