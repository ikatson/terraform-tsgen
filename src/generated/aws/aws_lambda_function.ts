import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_lambda_function__dead_letter_config {
    target_arn: rstring
}

export interface _aws_lambda_function__environment {
    variables?: {[propName: string]: rstring}
}

export interface _aws_lambda_function__tracing_config {
    mode: rstring
}

export interface _aws_lambda_function__vpc_config {
    security_group_ids: rstring[]
    subnet_ids: rstring[]
    vpc_id?: rstring
}

export interface aws_lambda_function_config {
    arn?: rstring
    dead_letter_config?: _aws_lambda_function__dead_letter_config[]
    description?: rstring
    environment?: _aws_lambda_function__environment[]
    filename?: rstring
    function_name: rstring
    handler: rstring
    invoke_arn?: rstring
    kms_key_arn?: rstring
    last_modified?: rstring
    layers?: rstring[]
    memory_size?: rnumber
    publish?: rboolean
    qualified_arn?: rstring
    reserved_concurrent_executions?: rnumber
    role: rstring
    runtime: rstring
    s3_bucket?: rstring
    s3_key?: rstring
    s3_object_version?: rstring
    source_code_hash?: rstring
    source_code_size?: rnumber
    tags?: {[propName: string]: rstring}
    timeout?: rnumber
    tracing_config?: _aws_lambda_function__tracing_config[]
    version?: rstring
    vpc_config?: _aws_lambda_function__vpc_config[]
}

export class aws_lambda_function implements Resource {
    config: aws_lambda_function_config
    private _is_data: boolean = false
    private _name: string = "aws_lambda_function"
    private _id: string;
    constructor(id: string, config: aws_lambda_function_config) {
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
    get ref_dead_letter_config(): Reference<_aws_lambda_function__dead_letter_config[]> {
        return new Reference(`${this._name}.${this._id}.dead_letter_config`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_environment(): Reference<_aws_lambda_function__environment[]> {
        return new Reference(`${this._name}.${this._id}.environment`)
    }
    get ref_filename(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.filename`)
    }
    get ref_function_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.function_name`)
    }
    get ref_handler(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.handler`)
    }
    get ref_invoke_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.invoke_arn`)
    }
    get ref_kms_key_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_arn`)
    }
    get ref_last_modified(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.last_modified`)
    }
    get ref_layers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.layers`)
    }
    get ref_memory_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.memory_size`)
    }
    get ref_publish(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.publish`)
    }
    get ref_qualified_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.qualified_arn`)
    }
    get ref_reserved_concurrent_executions(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.reserved_concurrent_executions`)
    }
    get ref_role(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role`)
    }
    get ref_runtime(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.runtime`)
    }
    get ref_s3_bucket(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_bucket`)
    }
    get ref_s3_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_key`)
    }
    get ref_s3_object_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_object_version`)
    }
    get ref_source_code_hash(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_code_hash`)
    }
    get ref_source_code_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.source_code_size`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_timeout(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.timeout`)
    }
    get ref_tracing_config(): Reference<_aws_lambda_function__tracing_config[]> {
        return new Reference(`${this._name}.${this._id}.tracing_config`)
    }
    get ref_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.version`)
    }
    get ref_vpc_config(): Reference<_aws_lambda_function__vpc_config[]> {
        return new Reference(`${this._name}.${this._id}.vpc_config`)
    }
}

