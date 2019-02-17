import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_macie_s3_bucket_association__classification_type {
    continuous?: rstring
    one_time?: rstring
}

export interface aws_macie_s3_bucket_association_config {
    bucket_name: rstring
    classification_type?: _aws_macie_s3_bucket_association__classification_type[]
    member_account_id?: rstring
    prefix?: rstring
}

export class aws_macie_s3_bucket_association implements Resource {
    config: aws_macie_s3_bucket_association_config
    private _is_data: boolean = false
    private _name: string = "aws_macie_s3_bucket_association"
    private _id: string;
    constructor(id: string, config: aws_macie_s3_bucket_association_config) {
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
        return new Reference(`${this._name}.${this._id}.bucket_name`)
    }
    get ref_classification_type(): Reference<_aws_macie_s3_bucket_association__classification_type[]> {
        return new Reference(`${this._name}.${this._id}.classification_type`)
    }
    get ref_member_account_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.member_account_id`)
    }
    get ref_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.prefix`)
    }
}

