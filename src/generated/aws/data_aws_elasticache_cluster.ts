import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_elasticache_cluster__cache_nodes {
    address?: rstring
    availability_zone?: rstring
    id?: rstring
    port?: rnumber
}

export interface data_aws_elasticache_cluster_config {
    arn?: rstring
    availability_zone?: rstring
    cache_nodes?: _data_aws_elasticache_cluster__cache_nodes[]
    cluster_address?: rstring
    cluster_id: rstring
    configuration_endpoint?: rstring
    engine?: rstring
    engine_version?: rstring
    maintenance_window?: rstring
    node_type?: rstring
    notification_topic_arn?: rstring
    num_cache_nodes?: rnumber
    parameter_group_name?: rstring
    port?: rnumber
    replication_group_id?: rstring
    security_group_ids?: rstring[]
    security_group_names?: rstring[]
    snapshot_retention_limit?: rnumber
    snapshot_window?: rstring
    subnet_group_name?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_elasticache_cluster implements Data {
    config: data_aws_elasticache_cluster_config
    private _is_data: boolean = true
    private _name: string = "aws_elasticache_cluster"
    private _id: string;
    constructor(id: string, config: data_aws_elasticache_cluster_config) {
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
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_cache_nodes(): Reference<_data_aws_elasticache_cluster__cache_nodes[]> {
        return new Reference(`data.${this._name}.${this._id}.cache_nodes`)
  }
    get ref_cluster_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_address`)
  }
    get ref_cluster_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_id`)
  }
    get ref_configuration_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.configuration_endpoint`)
  }
    get ref_engine(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine`)
  }
    get ref_engine_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine_version`)
  }
    get ref_maintenance_window(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.maintenance_window`)
  }
    get ref_node_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.node_type`)
  }
    get ref_notification_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.notification_topic_arn`)
  }
    get ref_num_cache_nodes(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.num_cache_nodes`)
  }
    get ref_parameter_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.parameter_group_name`)
  }
    get ref_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.port`)
  }
    get ref_replication_group_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.replication_group_id`)
  }
    get ref_security_group_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_group_ids`)
  }
    get ref_security_group_names(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_group_names`)
  }
    get ref_snapshot_retention_limit(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_retention_limit`)
  }
    get ref_snapshot_window(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_window`)
  }
    get ref_subnet_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subnet_group_name`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

