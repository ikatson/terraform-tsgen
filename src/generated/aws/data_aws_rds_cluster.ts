import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_rds_cluster_config {
    arn?: rstring
    availability_zones?: rstring[]
    backup_retention_period?: rnumber
    cluster_identifier: rstring
    cluster_members?: rstring[]
    cluster_resource_id?: rstring
    database_name?: rstring
    db_cluster_parameter_group_name?: rstring
    db_subnet_group_name?: rstring
    enabled_cloudwatch_logs_exports?: rstring[]
    endpoint?: rstring
    engine?: rstring
    engine_version?: rstring
    final_snapshot_identifier?: rstring
    iam_database_authentication_enabled?: rboolean
    iam_roles?: rstring[]
    kms_key_id?: rstring
    master_username?: rstring
    port?: rnumber
    preferred_backup_window?: rstring
    preferred_maintenance_window?: rstring
    reader_endpoint?: rstring
    replication_source_identifier?: rstring
    storage_encrypted?: rboolean
    tags?: {[propName: string]: rstring}
    vpc_security_group_ids?: rstring[]
}

export class data_aws_rds_cluster implements Data {
    config: data_aws_rds_cluster_config
    private _is_data: boolean = true
    private _name: string = "aws_rds_cluster"
    private _id: string;
    constructor(id: string, config: data_aws_rds_cluster_config) {
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
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.availability_zones`)
  }
    get ref_backup_retention_period(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.backup_retention_period`)
  }
    get ref_cluster_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_identifier`)
  }
    get ref_cluster_members(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.cluster_members`)
  }
    get ref_cluster_resource_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_resource_id`)
  }
    get ref_database_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.database_name`)
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
    get ref_iam_database_authentication_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.iam_database_authentication_enabled`)
  }
    get ref_iam_roles(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.iam_roles`)
  }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
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
    get ref_replication_source_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.replication_source_identifier`)
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

