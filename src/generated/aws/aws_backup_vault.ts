import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_backup_vault_config {
    arn?: rstring
    kms_key_arn?: rstring
    name: rstring
    recovery_points?: rnumber
    tags?: {[propName: string]: rstring}
}

export class aws_backup_vault implements Resource {
    config: aws_backup_vault_config
    private _is_data: boolean = false
    private _name: string = "aws_backup_vault"
    private _id: string;
    constructor(id: string, config: aws_backup_vault_config) {
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
    get ref_kms_key_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_arn`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_recovery_points(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.recovery_points`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

