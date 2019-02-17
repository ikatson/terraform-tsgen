import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_codepipeline__artifact_store__encryption_key {
    id: rstring
    type: rstring
}

export interface _data_aws_codepipeline__artifact_store {
    encryption_key?: __data_aws_codepipeline__artifact_store__encryption_key[]
    location: rstring
    type: rstring
}

export interface __data_aws_codepipeline__stage__action {
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

export interface _data_aws_codepipeline__stage {
    action: __data_aws_codepipeline__stage__action[]
    name: rstring
}

export interface data_aws_codepipeline_config {
    arn?: rstring
    artifact_store: _data_aws_codepipeline__artifact_store[]
    name: rstring
    role_arn: rstring
    stage: _data_aws_codepipeline__stage[]
}

export class data_aws_codepipeline implements Data {
    config: data_aws_codepipeline_config
    private _is_data: boolean = true
    private _name: string = "data_aws_codepipeline"
    private _id: string;
    constructor(id: string, config: data_aws_codepipeline_config) {
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
    get ref_artifact_store(): Reference<_data_aws_codepipeline__artifact_store[]> {
        return new Reference(`data.${this._name}.${this._id}.artifact_store`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
    get ref_stage(): Reference<_data_aws_codepipeline__stage[]> {
        return new Reference(`data.${this._name}.${this._id}.stage`)
  }
}

