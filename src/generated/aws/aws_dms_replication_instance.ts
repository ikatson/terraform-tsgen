import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_dms_replication_instance_config {
    allocated_storage?: rnumber
    apply_immediately?: rboolean
    auto_minor_version_upgrade?: rboolean
    availability_zone?: rstring
    engine_version?: rstring
    kms_key_arn?: rstring
    multi_az?: rboolean
    preferred_maintenance_window?: rstring
    publicly_accessible?: rboolean
    replication_instance_arn?: rstring
    replication_instance_class: rstring
    replication_instance_id: rstring
    replication_instance_private_ips?: rstring[]
    replication_instance_public_ips?: rstring[]
    replication_subnet_group_id?: rstring
    tags?: {[propName: string]: rstring}
    vpc_security_group_ids?: rstring[]
}

export class aws_dms_replication_instance implements Resource {
    config: aws_dms_replication_instance_config
    private _is_data: boolean = false
    private _name: string = "aws_dms_replication_instance"
    private _id: string;
    constructor(id: string, config: aws_dms_replication_instance_config) {
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
    get ref_apply_immediately(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.apply_immediately`)
    }
    get ref_auto_minor_version_upgrade(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.auto_minor_version_upgrade`)
    }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.availability_zone`)
    }
    get ref_engine_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine_version`)
    }
    get ref_kms_key_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_arn`)
    }
    get ref_multi_az(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.multi_az`)
    }
    get ref_preferred_maintenance_window(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.preferred_maintenance_window`)
    }
    get ref_publicly_accessible(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.publicly_accessible`)
    }
    get ref_replication_instance_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_instance_arn`)
    }
    get ref_replication_instance_class(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_instance_class`)
    }
    get ref_replication_instance_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_instance_id`)
    }
    get ref_replication_instance_private_ips(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.replication_instance_private_ips`)
    }
    get ref_replication_instance_public_ips(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.replication_instance_public_ips`)
    }
    get ref_replication_subnet_group_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_subnet_group_id`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_security_group_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.vpc_security_group_ids`)
    }
}

