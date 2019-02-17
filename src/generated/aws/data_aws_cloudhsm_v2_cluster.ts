import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_cloudhsm_v2_cluster__cluster_certificates {
    aws_hardware_certificate?: rstring
    cluster_certificate?: rstring
    cluster_csr?: rstring
    hsm_certificate?: rstring
    manufacturer_hardware_certificate?: rstring
}

export interface data_aws_cloudhsm_v2_cluster_config {
    cluster_certificates?: _data_aws_cloudhsm_v2_cluster__cluster_certificates[]
    cluster_id: rstring
    cluster_state?: rstring
    security_group_id?: rstring
    subnet_ids?: rstring[]
    vpc_id?: rstring
}

export class data_aws_cloudhsm_v2_cluster implements Data {
    config: data_aws_cloudhsm_v2_cluster_config
    private _is_data: boolean = true
    private _name: string = "aws_cloudhsm_v2_cluster"
    private _id: string;
    constructor(id: string, config: data_aws_cloudhsm_v2_cluster_config) {
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
    
    get ref_cluster_certificates(): Reference<_data_aws_cloudhsm_v2_cluster__cluster_certificates[]> {
        return new Reference(`data.${this._name}.${this._id}.cluster_certificates`)
  }
    get ref_cluster_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_id`)
  }
    get ref_cluster_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_state`)
  }
    get ref_security_group_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.security_group_id`)
  }
    get ref_subnet_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.subnet_ids`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

