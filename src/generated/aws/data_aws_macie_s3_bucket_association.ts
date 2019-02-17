import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_macie_s3_bucket_association__classification_type {
    continuous?: rstring
    one_time?: rstring
}

export interface data_aws_macie_s3_bucket_association_config {
    bucket_name: rstring
    classification_type?: _data_aws_macie_s3_bucket_association__classification_type[]
    member_account_id?: rstring
    prefix?: rstring
}

export class data_aws_macie_s3_bucket_association implements Data {
    config: data_aws_macie_s3_bucket_association_config
    private _is_data: boolean = true
    private _name: string = "data_aws_macie_s3_bucket_association"
    private _id: string;
    constructor(id: string, config: data_aws_macie_s3_bucket_association_config) {
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
    
    get ref_bucket_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bucket_name`)
  }
    get ref_classification_type(): Reference<_data_aws_macie_s3_bucket_association__classification_type[]> {
        return new Reference(`data.${this._name}.${this._id}.classification_type`)
  }
    get ref_member_account_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.member_account_id`)
  }
    get ref_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.prefix`)
  }
}

