import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_glue_job__command {
    name?: rstring
    script_location: rstring
}

export interface _aws_glue_job__execution_property {
    max_concurrent_runs?: rnumber
}

export interface aws_glue_job_config {
    allocated_capacity?: rnumber
    command: _aws_glue_job__command[]
    connections?: rstring[]
    default_arguments?: {[propName: string]: rstring}
    description?: rstring
    execution_property?: _aws_glue_job__execution_property[]
    max_retries?: rnumber
    name: rstring
    role_arn: rstring
    security_configuration?: rstring
    timeout?: rnumber
}

export class aws_glue_job implements Resource {
    config: aws_glue_job_config
    private _is_data: boolean = false
    private _name: string = "aws_glue_job"
    private _id: string;
    constructor(id: string, config: aws_glue_job_config) {
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
    
    get ref_allocated_capacity(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.allocated_capacity`)
    }
    get ref_command(): Reference<_aws_glue_job__command[]> {
        return new Reference(`${this._name}.${this._id}.command`)
    }
    get ref_connections(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.connections`)
    }
    get ref_default_arguments(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.default_arguments`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_execution_property(): Reference<_aws_glue_job__execution_property[]> {
        return new Reference(`${this._name}.${this._id}.execution_property`)
    }
    get ref_max_retries(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.max_retries`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_arn`)
    }
    get ref_security_configuration(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.security_configuration`)
    }
    get ref_timeout(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.timeout`)
    }
}

