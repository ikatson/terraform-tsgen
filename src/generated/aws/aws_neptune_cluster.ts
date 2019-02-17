import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_neptune_cluster_config {
    apply_immediately?: rboolean
    arn?: rstring
    availability_zones?: rstring[]
    backup_retention_period?: rnumber
    cluster_identifier?: rstring
    cluster_identifier_prefix?: rstring
    cluster_members?: rstring[]
    cluster_resource_id?: rstring
    endpoint?: rstring
    engine?: rstring
    engine_version?: rstring
    final_snapshot_identifier?: rstring
    hosted_zone_id?: rstring
    iam_database_authentication_enabled?: rboolean
    iam_roles?: rstring[]
    kms_key_arn?: rstring
    neptune_cluster_parameter_group_name?: rstring
    neptune_subnet_group_name?: rstring
    port?: rnumber
    preferred_backup_window?: rstring
    preferred_maintenance_window?: rstring
    reader_endpoint?: rstring
    replication_source_identifier?: rstring
    skip_final_snapshot?: rboolean
    snapshot_identifier?: rstring
    storage_encrypted?: rboolean
    tags?: {[propName: string]: rstring}
    vpc_security_group_ids?: rstring[]
}

export class aws_neptune_cluster implements Resource {
    config: aws_neptune_cluster_config
    private _is_data: boolean = false
    private _name: string = "aws_neptune_cluster"
    private _id: string;
    constructor(id: string, config: aws_neptune_cluster_config) {
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
        return new Reference(`${this._name}.${this._id}.apply_immediately`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.availability_zones`)
    }
    get ref_backup_retention_period(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.backup_retention_period`)
    }
    get ref_cluster_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_identifier`)
    }
    get ref_cluster_identifier_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_identifier_prefix`)
    }
    get ref_cluster_members(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.cluster_members`)
    }
    get ref_cluster_resource_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_resource_id`)
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
    get ref_iam_roles(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.iam_roles`)
    }
    get ref_kms_key_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_arn`)
    }
    get ref_neptune_cluster_parameter_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.neptune_cluster_parameter_group_name`)
    }
    get ref_neptune_subnet_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.neptune_subnet_group_name`)
    }
    get ref_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.port`)
    }
    get ref_preferred_backup_window(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.preferred_backup_window`)
    }
    get ref_preferred_maintenance_window(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.preferred_maintenance_window`)
    }
    get ref_reader_endpoint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.reader_endpoint`)
    }
    get ref_replication_source_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_source_identifier`)
    }
    get ref_skip_final_snapshot(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.skip_final_snapshot`)
    }
    get ref_snapshot_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.snapshot_identifier`)
    }
    get ref_storage_encrypted(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.storage_encrypted`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_security_group_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.vpc_security_group_ids`)
    }
}

