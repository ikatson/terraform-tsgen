import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_elastictranscoder_pipeline__content_config {
    bucket?: rstring
    storage_class?: rstring
}

export interface _data_aws_elastictranscoder_pipeline__content_config_permissions {
    access?: rstring[]
    grantee?: rstring
    grantee_type?: rstring
}

export interface _data_aws_elastictranscoder_pipeline__notifications {
    completed?: rstring
    error?: rstring
    progressing?: rstring
    warning?: rstring
}

export interface _data_aws_elastictranscoder_pipeline__thumbnail_config {
    bucket?: rstring
    storage_class?: rstring
}

export interface _data_aws_elastictranscoder_pipeline__thumbnail_config_permissions {
    access?: rstring[]
    grantee?: rstring
    grantee_type?: rstring
}

export interface data_aws_elastictranscoder_pipeline_config {
    arn?: rstring
    aws_kms_key_arn?: rstring
    content_config?: _data_aws_elastictranscoder_pipeline__content_config[]
    content_config_permissions?: _data_aws_elastictranscoder_pipeline__content_config_permissions[]
    input_bucket: rstring
    name?: rstring
    notifications?: _data_aws_elastictranscoder_pipeline__notifications[]
    output_bucket?: rstring
    role: rstring
    thumbnail_config?: _data_aws_elastictranscoder_pipeline__thumbnail_config[]
    thumbnail_config_permissions?: _data_aws_elastictranscoder_pipeline__thumbnail_config_permissions[]
}

export class data_aws_elastictranscoder_pipeline implements Data {
    config: data_aws_elastictranscoder_pipeline_config
    private _is_data: boolean = true
    private _name: string = "data_aws_elastictranscoder_pipeline"
    private _id: string;
    constructor(id: string, config: data_aws_elastictranscoder_pipeline_config) {
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
    get ref_aws_kms_key_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.aws_kms_key_arn`)
  }
    get ref_content_config(): Reference<_data_aws_elastictranscoder_pipeline__content_config[]> {
        return new Reference(`data.${this._name}.${this._id}.content_config`)
  }
    get ref_content_config_permissions(): Reference<_data_aws_elastictranscoder_pipeline__content_config_permissions[]> {
        return new Reference(`data.${this._name}.${this._id}.content_config_permissions`)
  }
    get ref_input_bucket(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.input_bucket`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_notifications(): Reference<_data_aws_elastictranscoder_pipeline__notifications[]> {
        return new Reference(`data.${this._name}.${this._id}.notifications`)
  }
    get ref_output_bucket(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.output_bucket`)
  }
    get ref_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role`)
  }
    get ref_thumbnail_config(): Reference<_data_aws_elastictranscoder_pipeline__thumbnail_config[]> {
        return new Reference(`data.${this._name}.${this._id}.thumbnail_config`)
  }
    get ref_thumbnail_config_permissions(): Reference<_data_aws_elastictranscoder_pipeline__thumbnail_config_permissions[]> {
        return new Reference(`data.${this._name}.${this._id}.thumbnail_config_permissions`)
  }
}

