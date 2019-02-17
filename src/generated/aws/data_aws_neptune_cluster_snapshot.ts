import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_neptune_cluster_snapshot_config {
    allocated_storage?: rnumber
    availability_zones?: rstring[]
    db_cluster_identifier: rstring
    db_cluster_snapshot_arn?: rstring
    db_cluster_snapshot_identifier: rstring
    engine?: rstring
    engine_version?: rstring
    kms_key_id?: rstring
    license_model?: rstring
    port?: rnumber
    snapshot_type?: rstring
    source_db_cluster_snapshot_arn?: rstring
    status?: rstring
    storage_encrypted?: rboolean
    vpc_id?: rstring
}

export class data_aws_neptune_cluster_snapshot implements Data {
    config: data_aws_neptune_cluster_snapshot_config
    private _is_data: boolean = true
    private _name: string = "data_aws_neptune_cluster_snapshot"
    private _id: string;
    constructor(id: string, config: data_aws_neptune_cluster_snapshot_config) {
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
    
    get ref_allocated_storage(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.allocated_storage`)
  }
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.availability_zones`)
  }
    get ref_db_cluster_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_cluster_identifier`)
  }
    get ref_db_cluster_snapshot_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_cluster_snapshot_arn`)
  }
    get ref_db_cluster_snapshot_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.db_cluster_snapshot_identifier`)
  }
    get ref_engine(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine`)
  }
    get ref_engine_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine_version`)
  }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_license_model(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.license_model`)
  }
    get ref_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.port`)
  }
    get ref_snapshot_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_type`)
  }
    get ref_source_db_cluster_snapshot_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_db_cluster_snapshot_arn`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_storage_encrypted(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.storage_encrypted`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

