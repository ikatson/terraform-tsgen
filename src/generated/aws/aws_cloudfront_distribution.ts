import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_cloudfront_distribution__cache_behavior__forwarded_values__cookies {
    forward: rstring
    whitelisted_names?: rstring[]
}

export interface __aws_cloudfront_distribution__cache_behavior__forwarded_values {
    cookies: __aws_cloudfront_distribution__cache_behavior__forwarded_values__cookies[]
    headers?: rstring[]
    query_string: rboolean
    query_string_cache_keys?: rstring[]
}

export interface __aws_cloudfront_distribution__cache_behavior__lambda_function_association {
    event_type: rstring
    include_body?: rboolean
    lambda_arn: rstring
}

export interface _aws_cloudfront_distribution__cache_behavior {
    allowed_methods: rstring[]
    cached_methods: rstring[]
    compress?: rboolean
    default_ttl?: rnumber
    field_level_encryption_id?: rstring
    forwarded_values: __aws_cloudfront_distribution__cache_behavior__forwarded_values[]
    lambda_function_association?: __aws_cloudfront_distribution__cache_behavior__lambda_function_association[]
    max_ttl?: rnumber
    min_ttl?: rnumber
    path_pattern: rstring
    smooth_streaming?: rboolean
    target_origin_id: rstring
    trusted_signers?: rstring[]
    viewer_protocol_policy: rstring
}

export interface _aws_cloudfront_distribution__custom_error_response {
    error_caching_min_ttl?: rnumber
    error_code: rnumber
    response_code?: rnumber
    response_page_path?: rstring
}

export interface __aws_cloudfront_distribution__default_cache_behavior__forwarded_values__cookies {
    forward: rstring
    whitelisted_names?: rstring[]
}

export interface __aws_cloudfront_distribution__default_cache_behavior__forwarded_values {
    cookies: __aws_cloudfront_distribution__default_cache_behavior__forwarded_values__cookies[]
    headers?: rstring[]
    query_string: rboolean
    query_string_cache_keys?: rstring[]
}

export interface __aws_cloudfront_distribution__default_cache_behavior__lambda_function_association {
    event_type: rstring
    include_body?: rboolean
    lambda_arn: rstring
}

export interface _aws_cloudfront_distribution__default_cache_behavior {
    allowed_methods: rstring[]
    cached_methods: rstring[]
    compress?: rboolean
    default_ttl?: rnumber
    field_level_encryption_id?: rstring
    forwarded_values: __aws_cloudfront_distribution__default_cache_behavior__forwarded_values[]
    lambda_function_association?: __aws_cloudfront_distribution__default_cache_behavior__lambda_function_association[]
    max_ttl?: rnumber
    min_ttl?: rnumber
    smooth_streaming?: rboolean
    target_origin_id: rstring
    trusted_signers?: rstring[]
    viewer_protocol_policy: rstring
}

export interface _aws_cloudfront_distribution__logging_config {
    bucket: rstring
    include_cookies?: rboolean
    prefix?: rstring
}

export interface __aws_cloudfront_distribution__ordered_cache_behavior__forwarded_values__cookies {
    forward: rstring
    whitelisted_names?: rstring[]
}

export interface __aws_cloudfront_distribution__ordered_cache_behavior__forwarded_values {
    cookies: __aws_cloudfront_distribution__ordered_cache_behavior__forwarded_values__cookies[]
    headers?: rstring[]
    query_string: rboolean
    query_string_cache_keys?: rstring[]
}

export interface __aws_cloudfront_distribution__ordered_cache_behavior__lambda_function_association {
    event_type: rstring
    include_body?: rboolean
    lambda_arn: rstring
}

export interface _aws_cloudfront_distribution__ordered_cache_behavior {
    allowed_methods: rstring[]
    cached_methods: rstring[]
    compress?: rboolean
    default_ttl?: rnumber
    field_level_encryption_id?: rstring
    forwarded_values: __aws_cloudfront_distribution__ordered_cache_behavior__forwarded_values[]
    lambda_function_association?: __aws_cloudfront_distribution__ordered_cache_behavior__lambda_function_association[]
    max_ttl?: rnumber
    min_ttl?: rnumber
    path_pattern: rstring
    smooth_streaming?: rboolean
    target_origin_id: rstring
    trusted_signers?: rstring[]
    viewer_protocol_policy: rstring
}

export interface __aws_cloudfront_distribution__origin__custom_header {
    name: rstring
    value: rstring
}

export interface __aws_cloudfront_distribution__origin__custom_origin_config {
    http_port: rnumber
    https_port: rnumber
    origin_keepalive_timeout?: rnumber
    origin_protocol_policy: rstring
    origin_read_timeout?: rnumber
    origin_ssl_protocols: rstring[]
}

export interface __aws_cloudfront_distribution__origin__s3_origin_config {
    origin_access_identity: rstring
}

export interface _aws_cloudfront_distribution__origin {
    custom_header?: __aws_cloudfront_distribution__origin__custom_header[]
    custom_origin_config?: __aws_cloudfront_distribution__origin__custom_origin_config[]
    domain_name: rstring
    origin_id: rstring
    origin_path?: rstring
    s3_origin_config?: __aws_cloudfront_distribution__origin__s3_origin_config[]
}

export interface __aws_cloudfront_distribution__restrictions__geo_restriction {
    locations?: rstring[]
    restriction_type: rstring
}

export interface _aws_cloudfront_distribution__restrictions {
    geo_restriction: __aws_cloudfront_distribution__restrictions__geo_restriction[]
}

export interface _aws_cloudfront_distribution__viewer_certificate {
    acm_certificate_arn?: rstring
    cloudfront_default_certificate?: rboolean
    iam_certificate_id?: rstring
    minimum_protocol_version?: rstring
    ssl_support_method?: rstring
}

export interface aws_cloudfront_distribution_config {
    active_trusted_signers?: {[propName: string]: rstring}
    aliases?: rstring[]
    arn?: rstring
    cache_behavior?: _aws_cloudfront_distribution__cache_behavior[]
    caller_reference?: rstring
    comment?: rstring
    custom_error_response?: _aws_cloudfront_distribution__custom_error_response[]
    default_cache_behavior: _aws_cloudfront_distribution__default_cache_behavior[]
    default_root_object?: rstring
    domain_name?: rstring
    enabled: rboolean
    etag?: rstring
    hosted_zone_id?: rstring
    http_version?: rstring
    in_progress_validation_batches?: rnumber
    is_ipv6_enabled?: rboolean
    last_modified_time?: rstring
    logging_config?: _aws_cloudfront_distribution__logging_config[]
    ordered_cache_behavior?: _aws_cloudfront_distribution__ordered_cache_behavior[]
    origin: _aws_cloudfront_distribution__origin[]
    price_class?: rstring
    restrictions: _aws_cloudfront_distribution__restrictions[]
    retain_on_delete?: rboolean
    status?: rstring
    tags?: {[propName: string]: rstring}
    viewer_certificate: _aws_cloudfront_distribution__viewer_certificate[]
    web_acl_id?: rstring
}

export class aws_cloudfront_distribution implements Resource {
    config: aws_cloudfront_distribution_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudfront_distribution"
    private _id: string;
    constructor(id: string, config: aws_cloudfront_distribution_config) {
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
    
    get ref_active_trusted_signers(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.active_trusted_signers`)
    }
    get ref_aliases(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.aliases`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_cache_behavior(): Reference<_aws_cloudfront_distribution__cache_behavior[]> {
        return new Reference(`${this._name}.${this._id}.cache_behavior`)
    }
    get ref_caller_reference(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.caller_reference`)
    }
    get ref_comment(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.comment`)
    }
    get ref_custom_error_response(): Reference<_aws_cloudfront_distribution__custom_error_response[]> {
        return new Reference(`${this._name}.${this._id}.custom_error_response`)
    }
    get ref_default_cache_behavior(): Reference<_aws_cloudfront_distribution__default_cache_behavior[]> {
        return new Reference(`${this._name}.${this._id}.default_cache_behavior`)
    }
    get ref_default_root_object(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_root_object`)
    }
    get ref_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain_name`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_etag(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.etag`)
    }
    get ref_hosted_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.hosted_zone_id`)
    }
    get ref_http_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.http_version`)
    }
    get ref_in_progress_validation_batches(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.in_progress_validation_batches`)
    }
    get ref_is_ipv6_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.is_ipv6_enabled`)
    }
    get ref_last_modified_time(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.last_modified_time`)
    }
    get ref_logging_config(): Reference<_aws_cloudfront_distribution__logging_config[]> {
        return new Reference(`${this._name}.${this._id}.logging_config`)
    }
    get ref_ordered_cache_behavior(): Reference<_aws_cloudfront_distribution__ordered_cache_behavior[]> {
        return new Reference(`${this._name}.${this._id}.ordered_cache_behavior`)
    }
    get ref_origin(): Reference<_aws_cloudfront_distribution__origin[]> {
        return new Reference(`${this._name}.${this._id}.origin`)
    }
    get ref_price_class(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.price_class`)
    }
    get ref_restrictions(): Reference<_aws_cloudfront_distribution__restrictions[]> {
        return new Reference(`${this._name}.${this._id}.restrictions`)
    }
    get ref_retain_on_delete(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.retain_on_delete`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_viewer_certificate(): Reference<_aws_cloudfront_distribution__viewer_certificate[]> {
        return new Reference(`${this._name}.${this._id}.viewer_certificate`)
    }
    get ref_web_acl_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.web_acl_id`)
    }
}

