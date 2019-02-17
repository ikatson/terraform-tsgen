import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_secretsmanager_secret__rotation_rules {
    automatically_after_days: rnumber
}

export interface aws_secretsmanager_secret_config {
    arn?: rstring
    description?: rstring
    kms_key_id?: rstring
    name?: rstring
    name_prefix?: rstring
    policy?: rstring
    recovery_window_in_days?: rnumber
    rotation_enabled?: rboolean
    rotation_lambda_arn?: rstring
    rotation_rules?: _aws_secretsmanager_secret__rotation_rules[]
    tags?: {[propName: string]: rstring}
}

export class aws_secretsmanager_secret implements Resource {
    config: aws_secretsmanager_secret_config
    private _is_data: boolean = false
    private _name: string = "aws_secretsmanager_secret"
    private _id: string;
    constructor(id: string, config: aws_secretsmanager_secret_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_recovery_window_in_days(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.recovery_window_in_days`)
    }
    get ref_rotation_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.rotation_enabled`)
    }
    get ref_rotation_lambda_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rotation_lambda_arn`)
    }
    get ref_rotation_rules(): Reference<_aws_secretsmanager_secret__rotation_rules[]> {
        return new Reference(`${this._name}.${this._id}.rotation_rules`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

