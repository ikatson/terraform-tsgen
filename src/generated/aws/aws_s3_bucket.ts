import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_s3_bucket__cors_rule {
    allowed_headers?: rstring[]
    allowed_methods: rstring[]
    allowed_origins: rstring[]
    expose_headers?: rstring[]
    max_age_seconds?: rnumber
}

export interface __aws_s3_bucket__lifecycle_rule__expiration {
    date?: rstring
    days?: rnumber
    expired_object_delete_marker?: rboolean
}

export interface __aws_s3_bucket__lifecycle_rule__noncurrent_version_expiration {
    days?: rnumber
}

export interface __aws_s3_bucket__lifecycle_rule__noncurrent_version_transition {
    days?: rnumber
    storage_class: rstring
}

export interface __aws_s3_bucket__lifecycle_rule__transition {
    date?: rstring
    days?: rnumber
    storage_class: rstring
}

export interface _aws_s3_bucket__lifecycle_rule {
    abort_incomplete_multipart_upload_days?: rnumber
    enabled: rboolean
    expiration?: __aws_s3_bucket__lifecycle_rule__expiration[]
    id?: rstring
    noncurrent_version_expiration?: __aws_s3_bucket__lifecycle_rule__noncurrent_version_expiration[]
    noncurrent_version_transition?: __aws_s3_bucket__lifecycle_rule__noncurrent_version_transition[]
    prefix?: rstring
    tags?: {[propName: string]: rstring}
    transition?: __aws_s3_bucket__lifecycle_rule__transition[]
}

export interface _aws_s3_bucket__logging {
    target_bucket: rstring
    target_prefix?: rstring
}

export interface __aws_s3_bucket__object_lock_configuration__rule__default_retention {
    days?: rnumber
    mode: rstring
    years?: rnumber
}

export interface __aws_s3_bucket__object_lock_configuration__rule {
    default_retention: __aws_s3_bucket__object_lock_configuration__rule__default_retention[]
}

export interface _aws_s3_bucket__object_lock_configuration {
    object_lock_enabled: rstring
    rule?: __aws_s3_bucket__object_lock_configuration__rule[]
}

export interface __aws_s3_bucket__replication_configuration__rules__destination__access_control_translation {
    owner: rstring
}

export interface __aws_s3_bucket__replication_configuration__rules__destination {
    access_control_translation?: __aws_s3_bucket__replication_configuration__rules__destination__access_control_translation[]
    account_id?: rstring
    bucket: rstring
    replica_kms_key_id?: rstring
    storage_class?: rstring
}

export interface __aws_s3_bucket__replication_configuration__rules__filter {
    prefix?: rstring
    tags?: {[propName: string]: rstring}
}

export interface __aws_s3_bucket__replication_configuration__rules__source_selection_criteria__sse_kms_encrypted_objects {
    enabled: rboolean
}

export interface __aws_s3_bucket__replication_configuration__rules__source_selection_criteria {
    sse_kms_encrypted_objects?: __aws_s3_bucket__replication_configuration__rules__source_selection_criteria__sse_kms_encrypted_objects[]
}

export interface __aws_s3_bucket__replication_configuration__rules {
    destination: __aws_s3_bucket__replication_configuration__rules__destination[]
    filter?: __aws_s3_bucket__replication_configuration__rules__filter[]
    id?: rstring
    prefix?: rstring
    priority?: rnumber
    source_selection_criteria?: __aws_s3_bucket__replication_configuration__rules__source_selection_criteria[]
    status: rstring
}

export interface _aws_s3_bucket__replication_configuration {
    role: rstring
    rules: __aws_s3_bucket__replication_configuration__rules[]
}

export interface __aws_s3_bucket__server_side_encryption_configuration__rule__apply_server_side_encryption_by_default {
    kms_master_key_id?: rstring
    sse_algorithm: rstring
}

export interface __aws_s3_bucket__server_side_encryption_configuration__rule {
    apply_server_side_encryption_by_default: __aws_s3_bucket__server_side_encryption_configuration__rule__apply_server_side_encryption_by_default[]
}

export interface _aws_s3_bucket__server_side_encryption_configuration {
    rule: __aws_s3_bucket__server_side_encryption_configuration__rule[]
}

export interface _aws_s3_bucket__versioning {
    enabled?: rboolean
    mfa_delete?: rboolean
}

export interface _aws_s3_bucket__website {
    error_document?: rstring
    index_document?: rstring
    redirect_all_requests_to?: rstring
    routing_rules?: rstring
}

export interface aws_s3_bucket_config {
    acceleration_status?: rstring
    acl?: rstring
    arn?: rstring
    bucket?: rstring
    bucket_domain_name?: rstring
    bucket_prefix?: rstring
    bucket_regional_domain_name?: rstring
    cors_rule?: _aws_s3_bucket__cors_rule[]
    force_destroy?: rboolean
    hosted_zone_id?: rstring
    lifecycle_rule?: _aws_s3_bucket__lifecycle_rule[]
    logging?: _aws_s3_bucket__logging[]
    object_lock_configuration?: _aws_s3_bucket__object_lock_configuration[]
    policy?: rstring
    region?: rstring
    replication_configuration?: _aws_s3_bucket__replication_configuration[]
    request_payer?: rstring
    server_side_encryption_configuration?: _aws_s3_bucket__server_side_encryption_configuration[]
    tags?: {[propName: string]: rstring}
    versioning?: _aws_s3_bucket__versioning[]
    website?: _aws_s3_bucket__website[]
    website_domain?: rstring
    website_endpoint?: rstring
}

export class aws_s3_bucket implements Resource {
    config: aws_s3_bucket_config
    private _is_data: boolean = false
    private _name: string = "aws_s3_bucket"
    private _id: string;
    constructor(id: string, config: aws_s3_bucket_config) {
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
    
    get ref_acceleration_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.acceleration_status`)
    }
    get ref_acl(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.acl`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_bucket(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.bucket`)
    }
    get ref_bucket_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.bucket_domain_name`)
    }
    get ref_bucket_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.bucket_prefix`)
    }
    get ref_bucket_regional_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.bucket_regional_domain_name`)
    }
    get ref_cors_rule(): Reference<_aws_s3_bucket__cors_rule[]> {
        return new Reference(`${this._name}.${this._id}.cors_rule`)
    }
    get ref_force_destroy(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.force_destroy`)
    }
    get ref_hosted_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.hosted_zone_id`)
    }
    get ref_lifecycle_rule(): Reference<_aws_s3_bucket__lifecycle_rule[]> {
        return new Reference(`${this._name}.${this._id}.lifecycle_rule`)
    }
    get ref_logging(): Reference<_aws_s3_bucket__logging[]> {
        return new Reference(`${this._name}.${this._id}.logging`)
    }
    get ref_object_lock_configuration(): Reference<_aws_s3_bucket__object_lock_configuration[]> {
        return new Reference(`${this._name}.${this._id}.object_lock_configuration`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_region(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.region`)
    }
    get ref_replication_configuration(): Reference<_aws_s3_bucket__replication_configuration[]> {
        return new Reference(`${this._name}.${this._id}.replication_configuration`)
    }
    get ref_request_payer(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.request_payer`)
    }
    get ref_server_side_encryption_configuration(): Reference<_aws_s3_bucket__server_side_encryption_configuration[]> {
        return new Reference(`${this._name}.${this._id}.server_side_encryption_configuration`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_versioning(): Reference<_aws_s3_bucket__versioning[]> {
        return new Reference(`${this._name}.${this._id}.versioning`)
    }
    get ref_website(): Reference<_aws_s3_bucket__website[]> {
        return new Reference(`${this._name}.${this._id}.website`)
    }
    get ref_website_domain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.website_domain`)
    }
    get ref_website_endpoint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.website_endpoint`)
    }
}

