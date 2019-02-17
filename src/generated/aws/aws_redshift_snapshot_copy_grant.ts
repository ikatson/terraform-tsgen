import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_redshift_snapshot_copy_grant_config {
    kms_key_id?: rstring
    snapshot_copy_grant_name: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_redshift_snapshot_copy_grant implements Resource {
    config: aws_redshift_snapshot_copy_grant_config
    private _is_data: boolean = false
    private _name: string = "aws_redshift_snapshot_copy_grant"
    private _id: string;
    constructor(id: string, config: aws_redshift_snapshot_copy_grant_config) {
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
    
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_snapshot_copy_grant_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.snapshot_copy_grant_name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

