import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_redshift_snapshot_copy_grant_config {
    kms_key_id?: rstring
    snapshot_copy_grant_name: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_redshift_snapshot_copy_grant implements Data {
    config: data_aws_redshift_snapshot_copy_grant_config
    private _is_data: boolean = true
    private _name: string = "data_aws_redshift_snapshot_copy_grant"
    private _id: string;
    constructor(id: string, config: data_aws_redshift_snapshot_copy_grant_config) {
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
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_snapshot_copy_grant_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_copy_grant_name`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

