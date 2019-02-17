import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_codebuild_project__artifacts {
    encryption_disabled?: rboolean
    location?: rstring
    name?: rstring
    namespace_type?: rstring
    packaging?: rstring
    path?: rstring
    type: rstring
}

export interface _data_aws_codebuild_project__cache {
    location?: rstring
    type?: rstring
}

export interface __data_aws_codebuild_project__environment__environment_variable {
    name: rstring
    type?: rstring
    value: rstring
}

export interface _data_aws_codebuild_project__environment {
    certificate?: rstring
    compute_type: rstring
    environment_variable?: __data_aws_codebuild_project__environment__environment_variable[]
    image: rstring
    privileged_mode?: rboolean
    type: rstring
}

export interface _data_aws_codebuild_project__secondary_artifacts {
    artifact_identifier: rstring
    encryption_disabled?: rboolean
    location?: rstring
    name?: rstring
    namespace_type?: rstring
    packaging?: rstring
    path?: rstring
    type: rstring
}

export interface __data_aws_codebuild_project__secondary_sources__auth {
    resource?: rstring
    type: rstring
}

export interface _data_aws_codebuild_project__secondary_sources {
    auth?: __data_aws_codebuild_project__secondary_sources__auth[]
    buildspec?: rstring
    git_clone_depth?: rnumber
    insecure_ssl?: rboolean
    location?: rstring
    report_build_status?: rboolean
    source_identifier: rstring
    type: rstring
}

export interface __data_aws_codebuild_project__source__auth {
    resource?: rstring
    type: rstring
}

export interface _data_aws_codebuild_project__source {
    auth?: __data_aws_codebuild_project__source__auth[]
    buildspec?: rstring
    git_clone_depth?: rnumber
    insecure_ssl?: rboolean
    location?: rstring
    report_build_status?: rboolean
    type: rstring
}

export interface _data_aws_codebuild_project__vpc_config {
    security_group_ids: rstring[]
    subnets: rstring[]
    vpc_id: rstring
}

export interface data_aws_codebuild_project_config {
    arn?: rstring
    artifacts: _data_aws_codebuild_project__artifacts[]
    badge_enabled?: rboolean
    badge_url?: rstring
    build_timeout?: rnumber
    cache?: _data_aws_codebuild_project__cache[]
    description?: rstring
    encryption_key?: rstring
    environment: _data_aws_codebuild_project__environment[]
    name: rstring
    secondary_artifacts?: _data_aws_codebuild_project__secondary_artifacts[]
    secondary_sources?: _data_aws_codebuild_project__secondary_sources[]
    service_role: rstring
    source: _data_aws_codebuild_project__source[]
    tags?: {[propName: string]: rstring}
    timeout?: rnumber
    vpc_config?: _data_aws_codebuild_project__vpc_config[]
}

export class data_aws_codebuild_project implements Data {
    config: data_aws_codebuild_project_config
    private _is_data: boolean = true
    private _name: string = "data_aws_codebuild_project"
    private _id: string;
    constructor(id: string, config: data_aws_codebuild_project_config) {
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
    get ref_artifacts(): Reference<_data_aws_codebuild_project__artifacts[]> {
        return new Reference(`data.${this._name}.${this._id}.artifacts`)
  }
    get ref_badge_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.badge_enabled`)
  }
    get ref_badge_url(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.badge_url`)
  }
    get ref_build_timeout(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.build_timeout`)
  }
    get ref_cache(): Reference<_data_aws_codebuild_project__cache[]> {
        return new Reference(`data.${this._name}.${this._id}.cache`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_encryption_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.encryption_key`)
  }
    get ref_environment(): Reference<_data_aws_codebuild_project__environment[]> {
        return new Reference(`data.${this._name}.${this._id}.environment`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_secondary_artifacts(): Reference<_data_aws_codebuild_project__secondary_artifacts[]> {
        return new Reference(`data.${this._name}.${this._id}.secondary_artifacts`)
  }
    get ref_secondary_sources(): Reference<_data_aws_codebuild_project__secondary_sources[]> {
        return new Reference(`data.${this._name}.${this._id}.secondary_sources`)
  }
    get ref_service_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_role`)
  }
    get ref_source(): Reference<_data_aws_codebuild_project__source[]> {
        return new Reference(`data.${this._name}.${this._id}.source`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_timeout(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.timeout`)
  }
    get ref_vpc_config(): Reference<_data_aws_codebuild_project__vpc_config[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_config`)
  }
}

