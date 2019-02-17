import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_db_instance_config {
    address?: rstring
    allocated_storage?: rnumber
    auto_minor_version_upgrade?: rboolean
    availability_zone?: rstring
    backup_retention_period?: rnumber
    ca_cert_identifier?: rstring
    db_cluster_identifier?: rstring
    db_instance_arn?: rstring
    db_instance_class?: rstring
    db_instance_identifier: rstring
    db_instance_port?: rnumber
    db_name?: rstring
    db_parameter_groups?: rstring[]
    db_security_groups?: rstring[]
    db_subnet_group?: rstring
    enabled_cloudwatch_logs_exports?: rstring[]
    endpoint?: rstring
    engine?: rstring
    engine_version?: rstring
    hosted_zone_id?: rstring
    iops?: rnumber
    kms_key_id?: rstring
    license_model?: rstring
    master_username?: rstring
    monitoring_interval?: rnumber
    monitoring_role_arn?: rstring
    multi_az?: rboolean
    option_group_memberships?: rstring[]
    port?: rnumber
    preferred_backup_window?: rstring
    preferred_maintenance_window?: rstring
    publicly_accessible?: rboolean
    replicate_source_db?: rstring
    storage_encrypted?: rboolean
    storage_type?: rstring
    timezone?: rstring
    vpc_security_groups?: rstring[]
}

export class data_aws_db_instance implements Data {
    config: data_aws_db_instance_config
    private _is_data: boolean = true
    private _name: string = "aws_db_instance"
    private _id: string;
    constructor(id: string, config: data_aws_db_instance_config) {
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
        return new Reference(`data.${this._name}.${this._id}.address`)
  }
    get ref_allocated_storage(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.allocated_storage`)
  }
    get ref_auto_minor_version_upgrade(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.auto_minor_version_upgrade`)
  }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_backup_retention_period(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.backup_retention_period`)
  }
    get ref_ca_cert_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ca_cert_identifier`)
  }
    get ref_db_cluster_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_cluster_identifier`)
  }
    get ref_db_instance_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_instance_arn`)
  }
    get ref_db_instance_class(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_instance_class`)
  }
    get ref_db_instance_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_instance_identifier`)
  }
    get ref_db_instance_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.db_instance_port`)
  }
    get ref_db_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_name`)
  }
    get ref_db_parameter_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.db_parameter_groups`)
  }
    get ref_db_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.db_security_groups`)
  }
    get ref_db_subnet_group(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_subnet_group`)
  }
    get ref_enabled_cloudwatch_logs_exports(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.enabled_cloudwatch_logs_exports`)
  }
    get ref_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint`)
  }
    get ref_engine(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine`)
  }
    get ref_engine_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine_version`)
  }
    get ref_hosted_zone_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.hosted_zone_id`)
  }
    get ref_iops(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.iops`)
  }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_license_model(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.license_model`)
  }
    get ref_master_username(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.master_username`)
  }
    get ref_monitoring_interval(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.monitoring_interval`)
  }
    get ref_monitoring_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.monitoring_role_arn`)
  }
    get ref_multi_az(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.multi_az`)
  }
    get ref_option_group_memberships(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.option_group_memberships`)
  }
    get ref_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.port`)
  }
    get ref_preferred_backup_window(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.preferred_backup_window`)
  }
    get ref_preferred_maintenance_window(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.preferred_maintenance_window`)
  }
    get ref_publicly_accessible(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.publicly_accessible`)
  }
    get ref_replicate_source_db(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.replicate_source_db`)
  }
    get ref_storage_encrypted(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.storage_encrypted`)
  }
    get ref_storage_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.storage_type`)
  }
    get ref_timezone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.timezone`)
  }
    get ref_vpc_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_security_groups`)
  }
}

