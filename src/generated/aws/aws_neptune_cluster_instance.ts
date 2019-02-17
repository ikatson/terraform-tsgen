import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_neptune_cluster_instance_config {
    address?: rstring
    apply_immediately?: rboolean
    arn?: rstring
    auto_minor_version_upgrade?: rboolean
    availability_zone?: rstring
    cluster_identifier: rstring
    dbi_resource_id?: rstring
    endpoint?: rstring
    engine?: rstring
    engine_version?: rstring
    identifier?: rstring
    identifier_prefix?: rstring
    instance_class: rstring
    kms_key_arn?: rstring
    neptune_parameter_group_name?: rstring
    neptune_subnet_group_name?: rstring
    port?: rnumber
    preferred_backup_window?: rstring
    preferred_maintenance_window?: rstring
    promotion_tier?: rnumber
    publicly_accessible?: rboolean
    storage_encrypted?: rboolean
    tags?: {[propName: string]: rstring}
    writer?: rboolean
}

export class aws_neptune_cluster_instance implements Resource {
    config: aws_neptune_cluster_instance_config
    private _is_data: boolean = false
    private _name: string = "aws_neptune_cluster_instance"
    private _id: string;
    constructor(id: string, config: aws_neptune_cluster_instance_config) {
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
    
    get ref_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.address`)
    }
    get ref_apply_immediately(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.apply_immediately`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_auto_minor_version_upgrade(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.auto_minor_version_upgrade`)
    }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.availability_zone`)
    }
    get ref_cluster_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_identifier`)
    }
    get ref_dbi_resource_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dbi_resource_id`)
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
    get ref_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.identifier`)
    }
    get ref_identifier_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.identifier_prefix`)
    }
    get ref_instance_class(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_class`)
    }
    get ref_kms_key_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_arn`)
    }
    get ref_neptune_parameter_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.neptune_parameter_group_name`)
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
    get ref_promotion_tier(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.promotion_tier`)
    }
    get ref_publicly_accessible(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.publicly_accessible`)
    }
    get ref_storage_encrypted(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.storage_encrypted`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_writer(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.writer`)
    }
}

