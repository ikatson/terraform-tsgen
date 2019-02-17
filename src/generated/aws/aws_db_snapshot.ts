import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_db_snapshot_config {
    allocated_storage?: rnumber
    availability_zone?: rstring
    db_instance_identifier: rstring
    db_snapshot_arn?: rstring
    db_snapshot_identifier: rstring
    encrypted?: rboolean
    engine?: rstring
    engine_version?: rstring
    iops?: rnumber
    kms_key_id?: rstring
    license_model?: rstring
    option_group_name?: rstring
    port?: rnumber
    snapshot_type?: rstring
    source_db_snapshot_identifier?: rstring
    source_region?: rstring
    status?: rstring
    storage_type?: rstring
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class aws_db_snapshot implements Resource {
    config: aws_db_snapshot_config
    private _is_data: boolean = false
    private _name: string = "aws_db_snapshot"
    private _id: string;
    constructor(id: string, config: aws_db_snapshot_config) {
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
        return new Reference(`${this._name}.${this._id}.allocated_storage`)
    }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.availability_zone`)
    }
    get ref_db_instance_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.db_instance_identifier`)
    }
    get ref_db_snapshot_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.db_snapshot_arn`)
    }
    get ref_db_snapshot_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.db_snapshot_identifier`)
    }
    get ref_encrypted(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.encrypted`)
    }
    get ref_engine(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine`)
    }
    get ref_engine_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine_version`)
    }
    get ref_iops(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.iops`)
    }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_license_model(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.license_model`)
    }
    get ref_option_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.option_group_name`)
    }
    get ref_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.port`)
    }
    get ref_snapshot_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.snapshot_type`)
    }
    get ref_source_db_snapshot_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_db_snapshot_identifier`)
    }
    get ref_source_region(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_region`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_storage_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.storage_type`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

