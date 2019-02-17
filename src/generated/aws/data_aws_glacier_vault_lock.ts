import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_glacier_vault_lock_config {
    complete_lock: rboolean
    ignore_deletion_error?: rboolean
    policy: rstring
    vault_name: rstring
}

export class data_aws_glacier_vault_lock implements Data {
    config: data_aws_glacier_vault_lock_config
    private _is_data: boolean = true
    private _name: string = "data_aws_glacier_vault_lock"
    private _id: string;
    constructor(id: string, config: data_aws_glacier_vault_lock_config) {
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
    
    get ref_complete_lock(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.complete_lock`)
  }
    get ref_ignore_deletion_error(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.ignore_deletion_error`)
  }
    get ref_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy`)
  }
    get ref_vault_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vault_name`)
  }
}

