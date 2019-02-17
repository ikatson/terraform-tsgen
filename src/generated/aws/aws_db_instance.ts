import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_db_instance__s3_import {
    bucket_name: rstring
    bucket_prefix?: rstring
    ingestion_role: rstring
    source_engine: rstring
    source_engine_version: rstring
}

export interface aws_db_instance_config {
    address?: rstring
    allocated_storage?: rnumber
    allow_major_version_upgrade?: rboolean
    apply_immediately?: rboolean
    arn?: rstring
    auto_minor_version_upgrade?: rboolean
    availability_zone?: rstring
    backup_retention_period?: rnumber
    backup_window?: rstring
    ca_cert_identifier?: rstring
    character_set_name?: rstring
    copy_tags_to_snapshot?: rboolean
    db_subnet_group_name?: rstring
    deletion_protection?: rboolean
    domain?: rstring
    domain_iam_role_name?: rstring
    enabled_cloudwatch_logs_exports?: rstring[]
    endpoint?: rstring
    engine?: rstring
    engine_version?: rstring
    final_snapshot_identifier?: rstring
    hosted_zone_id?: rstring
    iam_database_authentication_enabled?: rboolean
    identifier?: rstring
    identifier_prefix?: rstring
    instance_class: rstring
    iops?: rnumber
    kms_key_id?: rstring
    license_model?: rstring
    maintenance_window?: rstring
    monitoring_interval?: rnumber
    monitoring_role_arn?: rstring
    multi_az?: rboolean
    name?: rstring
    option_group_name?: rstring
    parameter_group_name?: rstring
    password?: rstring
    port?: rnumber
    publicly_accessible?: rboolean
    replicas?: rstring[]
    replicate_source_db?: rstring
    resource_id?: rstring
    s3_import?: _aws_db_instance__s3_import[]
    security_group_names?: rstring[]
    skip_final_snapshot?: rboolean
    snapshot_identifier?: rstring
    status?: rstring
    storage_encrypted?: rboolean
    storage_type?: rstring
    tags?: {[propName: string]: rstring}
    timezone?: rstring
    username?: rstring
    vpc_security_group_ids?: rstring[]
}

export class aws_db_instance implements Resource {
    config: aws_db_instance_config
    private _is_data: boolean = false
    private _name: string = "aws_db_instance"
    private _id: string;
    constructor(id: string, config: aws_db_instance_config) {
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
    
    get ref_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.address`)
    }
    get ref_allocated_storage(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.allocated_storage`)
    }
    get ref_allow_major_version_upgrade(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.allow_major_version_upgrade`)
    }
    get ref_apply_immediately(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.apply_immediately`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_auto_minor_version_upgrade(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.auto_minor_version_upgrade`)
    }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.availability_zone`)
    }
    get ref_backup_retention_period(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.backup_retention_period`)
    }
    get ref_backup_window(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.backup_window`)
    }
    get ref_ca_cert_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ca_cert_identifier`)
    }
    get ref_character_set_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.character_set_name`)
    }
    get ref_copy_tags_to_snapshot(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.copy_tags_to_snapshot`)
    }
    get ref_db_subnet_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.db_subnet_group_name`)
    }
    get ref_deletion_protection(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.deletion_protection`)
    }
    get ref_domain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain`)
    }
    get ref_domain_iam_role_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain_iam_role_name`)
    }
    get ref_enabled_cloudwatch_logs_exports(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.enabled_cloudwatch_logs_exports`)
    }
    get ref_endpoint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.endpoint`)
    }
    get ref_engine(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine`)
    }
    get ref_engine_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine_version`)
    }
    get ref_final_snapshot_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.final_snapshot_identifier`)
    }
    get ref_hosted_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.hosted_zone_id`)
    }
    get ref_iam_database_authentication_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.iam_database_authentication_enabled`)
    }
    get ref_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.identifier`)
    }
    get ref_identifier_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.identifier_prefix`)
    }
    get ref_instance_class(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_class`)
    }
    get ref_iops(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.iops`)
    }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_license_model(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.license_model`)
    }
    get ref_maintenance_window(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.maintenance_window`)
    }
    get ref_monitoring_interval(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.monitoring_interval`)
    }
    get ref_monitoring_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.monitoring_role_arn`)
    }
    get ref_multi_az(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.multi_az`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_option_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.option_group_name`)
    }
    get ref_parameter_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.parameter_group_name`)
    }
    get ref_password(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.password`)
    }
    get ref_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.port`)
    }
    get ref_publicly_accessible(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.publicly_accessible`)
    }
    get ref_replicas(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.replicas`)
    }
    get ref_replicate_source_db(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replicate_source_db`)
    }
    get ref_resource_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_id`)
    }
    get ref_s3_import(): Reference<_aws_db_instance__s3_import[]> {
        return new Reference(`${this._name}.${this._id}.s3_import`)
    }
    get ref_security_group_names(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.security_group_names`)
    }
    get ref_skip_final_snapshot(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.skip_final_snapshot`)
    }
    get ref_snapshot_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.snapshot_identifier`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_storage_encrypted(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.storage_encrypted`)
    }
    get ref_storage_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.storage_type`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_timezone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.timezone`)
    }
    get ref_username(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.username`)
    }
    get ref_vpc_security_group_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.vpc_security_group_ids`)
    }
}

