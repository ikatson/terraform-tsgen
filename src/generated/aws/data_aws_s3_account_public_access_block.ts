import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_s3_account_public_access_block_config {
    account_id?: rstring
    block_public_acls?: rboolean
    block_public_policy?: rboolean
    ignore_public_acls?: rboolean
    restrict_public_buckets?: rboolean
}

export class data_aws_s3_account_public_access_block implements Data {
    config: data_aws_s3_account_public_access_block_config
    private _is_data: boolean = true
    private _name: string = "data_aws_s3_account_public_access_block"
    private _id: string;
    constructor(id: string, config: data_aws_s3_account_public_access_block_config) {
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
    
    get ref_account_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.account_id`)
  }
    get ref_block_public_acls(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.block_public_acls`)
  }
    get ref_block_public_policy(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.block_public_policy`)
  }
    get ref_ignore_public_acls(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.ignore_public_acls`)
  }
    get ref_restrict_public_buckets(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.restrict_public_buckets`)
  }
}

