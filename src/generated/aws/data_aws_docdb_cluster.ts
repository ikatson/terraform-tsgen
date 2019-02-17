import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_docdb_cluster_config {
    apply_immediately?: rboolean
    arn?: rstring
    availability_zones?: rstring[]
    backup_retention_period?: rnumber
    cluster_identifier?: rstring
    cluster_identifier_prefix?: rstring
    cluster_members?: rstring[]
    cluster_resource_id?: rstring
    db_cluster_parameter_group_name?: rstring
    db_subnet_group_name?: rstring
    enabled_cloudwatch_logs_exports?: rstring[]
    endpoint?: rstring
    engine?: rstring
    engine_version?: rstring
    final_snapshot_identifier?: rstring
    hosted_zone_id?: rstring
    kms_key_id?: rstring
    master_password?: rstring
    master_username?: rstring
    port?: rnumber
    preferred_backup_window?: rstring
    preferred_maintenance_window?: rstring
    reader_endpoint?: rstring
    skip_final_snapshot?: rboolean
    snapshot_identifier?: rstring
    storage_encrypted?: rboolean
    tags?: {[propName: string]: rstring}
    vpc_security_group_ids?: rstring[]
}

export class data_aws_docdb_cluster implements Data {
    config: data_aws_docdb_cluster_config
    private _is_data: boolean = true
    private _name: string = "data_aws_docdb_cluster"
    private _id: string;
    constructor(id: string, config: data_aws_docdb_cluster_config) {
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
    
    get ref_apply_immediately(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.apply_immediately`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.availability_zones`)
  }
    get ref_backup_retention_period(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.backup_retention_period`)
  }
    get ref_cluster_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_identifier`)
  }
    get ref_cluster_identifier_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_identifier_prefix`)
  }
    get ref_cluster_members(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.cluster_members`)
  }
    get ref_cluster_resource_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_resource_id`)
  }
    get ref_db_cluster_parameter_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_cluster_parameter_group_name`)
  }
    get ref_db_subnet_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_subnet_group_name`)
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
    get ref_final_snapshot_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.final_snapshot_identifier`)
  }
    get ref_hosted_zone_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.hosted_zone_id`)
  }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_master_password(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.master_password`)
  }
    get ref_master_username(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.master_username`)
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
    get ref_reader_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.reader_endpoint`)
  }
    get ref_skip_final_snapshot(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.skip_final_snapshot`)
  }
    get ref_snapshot_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_identifier`)
  }
    get ref_storage_encrypted(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.storage_encrypted`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_security_group_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_security_group_ids`)
  }
}

