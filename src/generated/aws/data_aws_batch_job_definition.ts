import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_batch_job_definition__retry_strategy {
    attempts?: rnumber
}

export interface _data_aws_batch_job_definition__timeout {
    attempt_duration_seconds?: rnumber
}

export interface data_aws_batch_job_definition_config {
    arn?: rstring
    container_properties?: rstring
    name: rstring
    parameters?: {[propName: string]: rstring}
    retry_strategy?: _data_aws_batch_job_definition__retry_strategy[]
    revision?: rnumber
    timeout?: _data_aws_batch_job_definition__timeout[]
    type: rstring
}

export class data_aws_batch_job_definition implements Data {
    config: data_aws_batch_job_definition_config
    private _is_data: boolean = true
    private _name: string = "data_aws_batch_job_definition"
    private _id: string;
    constructor(id: string, config: data_aws_batch_job_definition_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_container_properties(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.container_properties`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.parameters`)
  }
    get ref_retry_strategy(): Reference<_data_aws_batch_job_definition__retry_strategy[]> {
        return new Reference(`data.${this._name}.${this._id}.retry_strategy`)
  }
    get ref_revision(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.revision`)
  }
    get ref_timeout(): Reference<_data_aws_batch_job_definition__timeout[]> {
        return new Reference(`data.${this._name}.${this._id}.timeout`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

