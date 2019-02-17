import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_dlm_lifecycle_policy__policy_details__schedule__create_rule {
    interval: rnumber
    interval_unit?: rstring
    times?: rstring[]
}

export interface __aws_dlm_lifecycle_policy__policy_details__schedule__retain_rule {
    count: rnumber
}

export interface __aws_dlm_lifecycle_policy__policy_details__schedule {
    copy_tags?: rboolean
    create_rule: __aws_dlm_lifecycle_policy__policy_details__schedule__create_rule[]
    name: rstring
    retain_rule: __aws_dlm_lifecycle_policy__policy_details__schedule__retain_rule[]
    tags_to_add?: {[propName: string]: rstring}
}

export interface _aws_dlm_lifecycle_policy__policy_details {
    resource_types: rstring[]
    schedule: __aws_dlm_lifecycle_policy__policy_details__schedule[]
    target_tags: {[propName: string]: rstring}
}

export interface aws_dlm_lifecycle_policy_config {
    description: rstring
    execution_role_arn: rstring
    policy_details: _aws_dlm_lifecycle_policy__policy_details[]
    state?: rstring
}

export class aws_dlm_lifecycle_policy implements Resource {
    config: aws_dlm_lifecycle_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_dlm_lifecycle_policy"
    private _id: string;
    constructor(id: string, config: aws_dlm_lifecycle_policy_config) {
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
    
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_execution_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.execution_role_arn`)
    }
    get ref_policy_details(): Reference<_aws_dlm_lifecycle_policy__policy_details[]> {
        return new Reference(`${this._name}.${this._id}.policy_details`)
    }
    get ref_state(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.state`)
    }
}

