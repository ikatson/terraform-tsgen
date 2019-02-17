import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_cloudhsm_v2_cluster__cluster_certificates {
    aws_hardware_certificate?: rstring
    cluster_certificate?: rstring
    cluster_csr?: rstring
    hsm_certificate?: rstring
    manufacturer_hardware_certificate?: rstring
}

export interface aws_cloudhsm_v2_cluster_config {
    cluster_certificates?: _aws_cloudhsm_v2_cluster__cluster_certificates[]
    cluster_id?: rstring
    cluster_state?: rstring
    hsm_type: rstring
    security_group_id?: rstring
    source_backup_identifier?: rstring
    subnet_ids: rstring[]
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class aws_cloudhsm_v2_cluster implements Resource {
    config: aws_cloudhsm_v2_cluster_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudhsm_v2_cluster"
    private _id: string;
    constructor(id: string, config: aws_cloudhsm_v2_cluster_config) {
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
    
    get ref_cluster_certificates(): Reference<_aws_cloudhsm_v2_cluster__cluster_certificates[]> {
        return new Reference(`${this._name}.${this._id}.cluster_certificates`)
    }
    get ref_cluster_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_id`)
    }
    get ref_cluster_state(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_state`)
    }
    get ref_hsm_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.hsm_type`)
    }
    get ref_security_group_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.security_group_id`)
    }
    get ref_source_backup_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_backup_identifier`)
    }
    get ref_subnet_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.subnet_ids`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

