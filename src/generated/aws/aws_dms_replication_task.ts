import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_dms_replication_task_config {
    cdc_start_time?: rstring
    migration_type: rstring
    replication_instance_arn: rstring
    replication_task_arn?: rstring
    replication_task_id: rstring
    replication_task_settings?: rstring
    source_endpoint_arn: rstring
    table_mappings: rstring
    tags?: {[propName: string]: rstring}
    target_endpoint_arn: rstring
}

export class aws_dms_replication_task implements Resource {
    config: aws_dms_replication_task_config
    private _is_data: boolean = false
    private _name: string = "aws_dms_replication_task"
    private _id: string;
    constructor(id: string, config: aws_dms_replication_task_config) {
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
    
    get ref_cdc_start_time(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cdc_start_time`)
    }
    get ref_migration_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.migration_type`)
    }
    get ref_replication_instance_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_instance_arn`)
    }
    get ref_replication_task_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_task_arn`)
    }
    get ref_replication_task_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_task_id`)
    }
    get ref_replication_task_settings(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_task_settings`)
    }
    get ref_source_endpoint_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_endpoint_arn`)
    }
    get ref_table_mappings(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.table_mappings`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_target_endpoint_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.target_endpoint_arn`)
    }
}

