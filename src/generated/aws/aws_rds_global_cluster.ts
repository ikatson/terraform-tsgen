import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_rds_global_cluster_config {
    arn?: rstring
    database_name?: rstring
    deletion_protection?: rboolean
    engine?: rstring
    engine_version?: rstring
    global_cluster_identifier: rstring
    global_cluster_resource_id?: rstring
    storage_encrypted?: rboolean
}

export class aws_rds_global_cluster implements Resource {
    config: aws_rds_global_cluster_config
    private _is_data: boolean = false
    private _name: string = "aws_rds_global_cluster"
    private _id: string;
    constructor(id: string, config: aws_rds_global_cluster_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_database_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.database_name`)
    }
    get ref_deletion_protection(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.deletion_protection`)
    }
    get ref_engine(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine`)
    }
    get ref_engine_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine_version`)
    }
    get ref_global_cluster_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.global_cluster_identifier`)
    }
    get ref_global_cluster_resource_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.global_cluster_resource_id`)
    }
    get ref_storage_encrypted(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.storage_encrypted`)
    }
}

