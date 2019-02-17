import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_cloudtrail__event_selector__data_resource {
    type: rstring
    values: rstring[]
}

export interface _aws_cloudtrail__event_selector {
    data_resource?: __aws_cloudtrail__event_selector__data_resource[]
    include_management_events?: rboolean
    read_write_type?: rstring
}

export interface aws_cloudtrail_config {
    arn?: rstring
    cloud_watch_logs_group_arn?: rstring
    cloud_watch_logs_role_arn?: rstring
    enable_log_file_validation?: rboolean
    enable_logging?: rboolean
    event_selector?: _aws_cloudtrail__event_selector[]
    home_region?: rstring
    include_global_service_events?: rboolean
    is_multi_region_trail?: rboolean
    is_organization_trail?: rboolean
    kms_key_id?: rstring
    name: rstring
    s3_bucket_name: rstring
    s3_key_prefix?: rstring
    sns_topic_name?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_cloudtrail implements Resource {
    config: aws_cloudtrail_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudtrail"
    private _id: string;
    constructor(id: string, config: aws_cloudtrail_config) {
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
    get ref_cloud_watch_logs_group_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cloud_watch_logs_group_arn`)
    }
    get ref_cloud_watch_logs_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cloud_watch_logs_role_arn`)
    }
    get ref_enable_log_file_validation(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_log_file_validation`)
    }
    get ref_enable_logging(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_logging`)
    }
    get ref_event_selector(): Reference<_aws_cloudtrail__event_selector[]> {
        return new Reference(`${this._name}.${this._id}.event_selector`)
    }
    get ref_home_region(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.home_region`)
    }
    get ref_include_global_service_events(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.include_global_service_events`)
    }
    get ref_is_multi_region_trail(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.is_multi_region_trail`)
    }
    get ref_is_organization_trail(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.is_organization_trail`)
    }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_s3_bucket_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_bucket_name`)
    }
    get ref_s3_key_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_key_prefix`)
    }
    get ref_sns_topic_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sns_topic_name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

