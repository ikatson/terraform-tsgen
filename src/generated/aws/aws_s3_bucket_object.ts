import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_s3_bucket_object_config {
    acl?: rstring
    bucket: rstring
    cache_control?: rstring
    content?: rstring
    content_base64?: rstring
    content_disposition?: rstring
    content_encoding?: rstring
    content_language?: rstring
    content_type?: rstring
    etag?: rstring
    key: rstring
    kms_key_id?: rstring
    server_side_encryption?: rstring
    source?: rstring
    storage_class?: rstring
    tags?: {[propName: string]: rstring}
    version_id?: rstring
    website_redirect?: rstring
}

export class aws_s3_bucket_object implements Resource {
    config: aws_s3_bucket_object_config
    private _is_data: boolean = false
    private _name: string = "aws_s3_bucket_object"
    private _id: string;
    constructor(id: string, config: aws_s3_bucket_object_config) {
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
    
    get ref_acl(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.acl`)
    }
    get ref_bucket(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.bucket`)
    }
    get ref_cache_control(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cache_control`)
    }
    get ref_content(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.content`)
    }
    get ref_content_base64(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.content_base64`)
    }
    get ref_content_disposition(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.content_disposition`)
    }
    get ref_content_encoding(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.content_encoding`)
    }
    get ref_content_language(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.content_language`)
    }
    get ref_content_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.content_type`)
    }
    get ref_etag(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.etag`)
    }
    get ref_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key`)
    }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_server_side_encryption(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.server_side_encryption`)
    }
    get ref_source(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source`)
    }
    get ref_storage_class(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.storage_class`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_version_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.version_id`)
    }
    get ref_website_redirect(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.website_redirect`)
    }
}

