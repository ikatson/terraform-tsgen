import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_eks_cluster__certificate_authority {
    data?: rstring
}

export interface _data_aws_eks_cluster__vpc_config {
    security_group_ids?: rstring[]
    subnet_ids?: rstring[]
    vpc_id?: rstring
}

export interface data_aws_eks_cluster_config {
    arn?: rstring
    certificate_authority?: _data_aws_eks_cluster__certificate_authority[]
    created_at?: rstring
    endpoint?: rstring
    name: rstring
    platform_version?: rstring
    role_arn?: rstring
    version?: rstring
    vpc_config?: _data_aws_eks_cluster__vpc_config[]
}

export class data_aws_eks_cluster implements Data {
    config: data_aws_eks_cluster_config
    private _is_data: boolean = true
    private _name: string = "aws_eks_cluster"
    private _id: string;
    constructor(id: string, config: data_aws_eks_cluster_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_certificate_authority(): Reference<_data_aws_eks_cluster__certificate_authority[]> {
        return new Reference(`data.${this._name}.${this._id}.certificate_authority`)
  }
    get ref_created_at(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.created_at`)
  }
    get ref_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_platform_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.platform_version`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
    get ref_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.version`)
  }
    get ref_vpc_config(): Reference<_data_aws_eks_cluster__vpc_config[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_config`)
  }
}

