import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_redshift_cluster_config {
    allow_version_upgrade?: rboolean
    automated_snapshot_retention_period?: rnumber
    availability_zone?: rstring
    bucket_name?: rstring
    cluster_identifier: rstring
    cluster_parameter_group_name?: rstring
    cluster_public_key?: rstring
    cluster_revision_number?: rstring
    cluster_security_groups?: rstring[]
    cluster_subnet_group_name?: rstring
    cluster_type?: rstring
    cluster_version?: rstring
    database_name?: rstring
    elastic_ip?: rstring
    enable_logging?: rboolean
    encrypted?: rboolean
    endpoint?: rstring
    enhanced_vpc_routing?: rboolean
    iam_roles?: rstring[]
    kms_key_id?: rstring
    master_username?: rstring
    node_type?: rstring
    number_of_nodes?: rnumber
    port?: rnumber
    preferred_maintenance_window?: rstring
    publicly_accessible?: rboolean
    s3_key_prefix?: rstring
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
    vpc_security_group_ids?: rstring[]
}

export class data_aws_redshift_cluster implements Data {
    config: data_aws_redshift_cluster_config
    private _is_data: boolean = true
    private _name: string = "aws_redshift_cluster"
    private _id: string;
    constructor(id: string, config: data_aws_redshift_cluster_config) {
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
    
    get ref_allow_version_upgrade(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.allow_version_upgrade`)
  }
    get ref_automated_snapshot_retention_period(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.automated_snapshot_retention_period`)
  }
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_bucket_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bucket_name`)
  }
    get ref_cluster_identifier(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_identifier`)
  }
    get ref_cluster_parameter_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_parameter_group_name`)
  }
    get ref_cluster_public_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_public_key`)
  }
    get ref_cluster_revision_number(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_revision_number`)
  }
    get ref_cluster_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.cluster_security_groups`)
  }
    get ref_cluster_subnet_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_subnet_group_name`)
  }
    get ref_cluster_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_type`)
  }
    get ref_cluster_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_version`)
  }
    get ref_database_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.database_name`)
  }
    get ref_elastic_ip(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.elastic_ip`)
  }
    get ref_enable_logging(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enable_logging`)
  }
    get ref_encrypted(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.encrypted`)
  }
    get ref_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint`)
  }
    get ref_enhanced_vpc_routing(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enhanced_vpc_routing`)
  }
    get ref_iam_roles(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.iam_roles`)
  }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_master_username(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.master_username`)
  }
    get ref_node_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.node_type`)
  }
    get ref_number_of_nodes(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.number_of_nodes`)
  }
    get ref_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.port`)
  }
    get ref_preferred_maintenance_window(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.preferred_maintenance_window`)
  }
    get ref_publicly_accessible(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.publicly_accessible`)
  }
    get ref_s3_key_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.s3_key_prefix`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
    get ref_vpc_security_group_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_security_group_ids`)
  }
}

