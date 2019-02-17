import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_elasticache_replication_group__cluster_mode {
    num_node_groups: rnumber
    replicas_per_node_group: rnumber
}

export interface aws_elasticache_replication_group_config {
    apply_immediately?: rboolean
    at_rest_encryption_enabled?: rboolean
    auth_token?: rstring
    auto_minor_version_upgrade?: rboolean
    automatic_failover_enabled?: rboolean
    availability_zones?: rstring[]
    cluster_mode?: _aws_elasticache_replication_group__cluster_mode[]
    configuration_endpoint_address?: rstring
    engine?: rstring
    engine_version?: rstring
    maintenance_window?: rstring
    member_clusters?: rstring[]
    node_type?: rstring
    notification_topic_arn?: rstring
    number_cache_clusters?: rnumber
    parameter_group_name?: rstring
    port?: rnumber
    primary_endpoint_address?: rstring
    replication_group_description: rstring
    replication_group_id: rstring
    security_group_ids?: rstring[]
    security_group_names?: rstring[]
    snapshot_arns?: rstring[]
    snapshot_name?: rstring
    snapshot_retention_limit?: rnumber
    snapshot_window?: rstring
    subnet_group_name?: rstring
    tags?: {[propName: string]: rstring}
    transit_encryption_enabled?: rboolean
}

export class aws_elasticache_replication_group implements Resource {
    config: aws_elasticache_replication_group_config
    private _is_data: boolean = false
    private _name: string = "aws_elasticache_replication_group"
    private _id: string;
    constructor(id: string, config: aws_elasticache_replication_group_config) {
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
    get ref_at_rest_encryption_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.at_rest_encryption_enabled`)
    }
    get ref_auth_token(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.auth_token`)
    }
    get ref_auto_minor_version_upgrade(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.auto_minor_version_upgrade`)
    }
    get ref_automatic_failover_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.automatic_failover_enabled`)
    }
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.availability_zones`)
    }
    get ref_cluster_mode(): Reference<_aws_elasticache_replication_group__cluster_mode[]> {
        return new Reference(`${this._name}.${this._id}.cluster_mode`)
    }
    get ref_configuration_endpoint_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.configuration_endpoint_address`)
    }
    get ref_engine(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine`)
    }
    get ref_engine_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine_version`)
    }
    get ref_maintenance_window(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.maintenance_window`)
    }
    get ref_member_clusters(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.member_clusters`)
    }
    get ref_node_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.node_type`)
    }
    get ref_notification_topic_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.notification_topic_arn`)
    }
    get ref_number_cache_clusters(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.number_cache_clusters`)
    }
    get ref_parameter_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.parameter_group_name`)
    }
    get ref_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.port`)
    }
    get ref_primary_endpoint_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.primary_endpoint_address`)
    }
    get ref_replication_group_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_group_description`)
    }
    get ref_replication_group_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_group_id`)
    }
    get ref_security_group_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.security_group_ids`)
    }
    get ref_security_group_names(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.security_group_names`)
    }
    get ref_snapshot_arns(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.snapshot_arns`)
    }
    get ref_snapshot_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.snapshot_name`)
    }
    get ref_snapshot_retention_limit(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.snapshot_retention_limit`)
    }
    get ref_snapshot_window(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.snapshot_window`)
    }
    get ref_subnet_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subnet_group_name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_transit_encryption_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.transit_encryption_enabled`)
    }
}

