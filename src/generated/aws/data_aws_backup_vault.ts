import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_backup_vault_config {
    arn?: rstring
    kms_key_arn?: rstring
    name: rstring
    recovery_points?: rnumber
    tags?: {[propName: string]: rstring}
}

export class data_aws_backup_vault implements Data {
    config: data_aws_backup_vault_config
    private _is_data: boolean = true
    private _name: string = "data_aws_backup_vault"
    private _id: string;
    constructor(id: string, config: data_aws_backup_vault_config) {
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
    get ref_kms_key_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_arn`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_recovery_points(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.recovery_points`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

