import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_s3_bucket_object_config {
    body?: rstring
    bucket: rstring
    cache_control?: rstring
    content_disposition?: rstring
    content_encoding?: rstring
    content_language?: rstring
    content_length?: rnumber
    content_type?: rstring
    etag?: rstring
    expiration?: rstring
    expires?: rstring
    key: rstring
    last_modified?: rstring
    metadata?: {[propName: string]: rstring}
    range?: rstring
    server_side_encryption?: rstring
    sse_kms_key_id?: rstring
    storage_class?: rstring
    tags?: {[propName: string]: rstring}
    version_id?: rstring
    website_redirect_location?: rstring
}

export class data_aws_s3_bucket_object implements Data {
    config: data_aws_s3_bucket_object_config
    private _is_data: boolean = true
    private _name: string = "aws_s3_bucket_object"
    private _id: string;
    constructor(id: string, config: data_aws_s3_bucket_object_config) {
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
    
    get ref_body(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.body`)
  }
    get ref_bucket(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bucket`)
  }
    get ref_cache_control(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cache_control`)
  }
    get ref_content_disposition(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.content_disposition`)
  }
    get ref_content_encoding(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.content_encoding`)
  }
    get ref_content_language(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.content_language`)
  }
    get ref_content_length(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.content_length`)
  }
    get ref_content_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.content_type`)
  }
    get ref_etag(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.etag`)
  }
    get ref_expiration(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.expiration`)
  }
    get ref_expires(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.expires`)
  }
    get ref_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key`)
  }
    get ref_last_modified(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.last_modified`)
  }
    get ref_metadata(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.metadata`)
  }
    get ref_range(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.range`)
  }
    get ref_server_side_encryption(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.server_side_encryption`)
  }
    get ref_sse_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.sse_kms_key_id`)
  }
    get ref_storage_class(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.storage_class`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_version_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.version_id`)
  }
    get ref_website_redirect_location(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.website_redirect_location`)
  }
}

