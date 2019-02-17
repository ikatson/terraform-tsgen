import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_codepipeline__artifact_store__encryption_key {
    id: rstring
    type: rstring
}

export interface _aws_codepipeline__artifact_store {
    encryption_key?: __aws_codepipeline__artifact_store__encryption_key[]
    location: rstring
    type: rstring
}

export interface __aws_codepipeline__stage__action {
    category: rstring
    configuration?: {[propName: string]: rstring}
    input_artifacts?: rstring[]
    name: rstring
    output_artifacts?: rstring[]
    owner: rstring
    provider: rstring
    role_arn?: rstring
    run_order?: rnumber
    version: rstring
}

export interface _aws_codepipeline__stage {
    action: __aws_codepipeline__stage__action[]
    name: rstring
}

export interface aws_codepipeline_config {
    arn?: rstring
    artifact_store: _aws_codepipeline__artifact_store[]
    name: rstring
    role_arn: rstring
    stage: _aws_codepipeline__stage[]
}

export class aws_codepipeline implements Resource {
    config: aws_codepipeline_config
    private _is_data: boolean = false
    private _name: string = "aws_codepipeline"
    private _id: string;
    constructor(id: string, config: aws_codepipeline_config) {
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
    get ref_artifact_store(): Reference<_aws_codepipeline__artifact_store[]> {
        return new Reference(`${this._name}.${this._id}.artifact_store`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_arn`)
    }
    get ref_stage(): Reference<_aws_codepipeline__stage[]> {
        return new Reference(`${this._name}.${this._id}.stage`)
    }
}

