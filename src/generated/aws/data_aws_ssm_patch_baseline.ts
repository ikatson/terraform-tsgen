import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_ssm_patch_baseline__approval_rule__patch_filter {
    key: rstring
    values: rstring[]
}

export interface _data_aws_ssm_patch_baseline__approval_rule {
    approve_after_days: rnumber
    compliance_level?: rstring
    enable_non_security?: rboolean
    patch_filter: __data_aws_ssm_patch_baseline__approval_rule__patch_filter[]
}

export interface _data_aws_ssm_patch_baseline__global_filter {
    key: rstring
    values: rstring[]
}

export interface data_aws_ssm_patch_baseline_config {
    approval_rule?: _data_aws_ssm_patch_baseline__approval_rule[]
    approved_patches?: rstring[]
    approved_patches_compliance_level?: rstring
    description?: rstring
    global_filter?: _data_aws_ssm_patch_baseline__global_filter[]
    name: rstring
    operating_system?: rstring
    rejected_patches?: rstring[]
}

export class data_aws_ssm_patch_baseline implements Data {
    config: data_aws_ssm_patch_baseline_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ssm_patch_baseline"
    private _id: string;
    constructor(id: string, config: data_aws_ssm_patch_baseline_config) {
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
    
    get ref_approval_rule(): Reference<_data_aws_ssm_patch_baseline__approval_rule[]> {
        return new Reference(`data.${this._name}.${this._id}.approval_rule`)
  }
    get ref_approved_patches(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.approved_patches`)
  }
    get ref_approved_patches_compliance_level(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.approved_patches_compliance_level`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_global_filter(): Reference<_data_aws_ssm_patch_baseline__global_filter[]> {
        return new Reference(`data.${this._name}.${this._id}.global_filter`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_operating_system(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.operating_system`)
  }
    get ref_rejected_patches(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.rejected_patches`)
  }
}

