import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_glacier_vault_lock_config {
    complete_lock: rboolean
    ignore_deletion_error?: rboolean
    policy: rstring
    vault_name: rstring
}

export class aws_glacier_vault_lock implements Resource {
    config: aws_glacier_vault_lock_config
    private _is_data: boolean = false
    private _name: string = "aws_glacier_vault_lock"
    private _id: string;
    constructor(id: string, config: aws_glacier_vault_lock_config) {
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
        return new Reference(`${this._name}.${this._id}.complete_lock`)
    }
    get ref_ignore_deletion_error(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.ignore_deletion_error`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_vault_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vault_name`)
    }
}

