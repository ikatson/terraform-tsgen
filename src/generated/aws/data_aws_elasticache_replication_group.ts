import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_elasticache_replication_group_config {
    auth_token_enabled?: rboolean
    automatic_failover_enabled?: rboolean
    configuration_endpoint_address?: rstring
    member_clusters?: rstring[]
    node_type?: rstring
    number_cache_clusters?: rnumber
    port?: rnumber
    primary_endpoint_address?: rstring
    replication_group_description?: rstring
    replication_group_id: rstring
    snapshot_retention_limit?: rnumber
    snapshot_window?: rstring
}

export class data_aws_elasticache_replication_group implements Data {
    config: data_aws_elasticache_replication_group_config
    private _is_data: boolean = true
    private _name: string = "aws_elasticache_replication_group"
    private _id: string;
    constructor(id: string, config: data_aws_elasticache_replication_group_config) {
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
    
    get ref_auth_token_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.auth_token_enabled`)
  }
    get ref_automatic_failover_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.automatic_failover_enabled`)
  }
    get ref_configuration_endpoint_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.configuration_endpoint_address`)
  }
    get ref_member_clusters(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.member_clusters`)
  }
    get ref_node_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.node_type`)
  }
    get ref_number_cache_clusters(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.number_cache_clusters`)
  }
    get ref_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.port`)
  }
    get ref_primary_endpoint_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.primary_endpoint_address`)
  }
    get ref_replication_group_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.replication_group_description`)
  }
    get ref_replication_group_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.replication_group_id`)
  }
    get ref_snapshot_retention_limit(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_retention_limit`)
  }
    get ref_snapshot_window(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_window`)
  }
}

