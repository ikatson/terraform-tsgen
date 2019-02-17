import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_docdb_cluster_snapshot_config {
    availability_zones?: rstring[]
    db_cluster_identifier: rstring
    db_cluster_snapshot_arn?: rstring
    db_cluster_snapshot_identifier: rstring
    engine?: rstring
    engine_version?: rstring
    kms_key_id?: rstring
    port?: rnumber
    snapshot_type?: rstring
    source_db_cluster_snapshot_arn?: rstring
    status?: rstring
    storage_encrypted?: rboolean
    vpc_id?: rstring
}

export class aws_docdb_cluster_snapshot implements Resource {
    config: aws_docdb_cluster_snapshot_config
    private _is_data: boolean = false
    private _name: string = "aws_docdb_cluster_snapshot"
    private _id: string;
    constructor(id: string, config: aws_docdb_cluster_snapshot_config) {
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
    
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.availability_zones`)
    }
    get ref_db_cluster_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.db_cluster_identifier`)
    }
    get ref_db_cluster_snapshot_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.db_cluster_snapshot_arn`)
    }
    get ref_db_cluster_snapshot_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.db_cluster_snapshot_identifier`)
    }
    get ref_engine(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine`)
    }
    get ref_engine_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine_version`)
    }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.port`)
    }
    get ref_snapshot_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.snapshot_type`)
    }
    get ref_source_db_cluster_snapshot_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_db_cluster_snapshot_arn`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_storage_encrypted(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.storage_encrypted`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

