import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_s3_bucket_inventory__destination__bucket__encryption__sse_kms {
    key_id: rstring
}

export interface __data_aws_s3_bucket_inventory__destination__bucket__encryption {
    sse_kms?: __data_aws_s3_bucket_inventory__destination__bucket__encryption__sse_kms[]
    sse_s3?: __data_aws_s3_bucket_inventory__destination__bucket__encryption__sse_s3[]
}

export interface __data_aws_s3_bucket_inventory__destination__bucket {
    account_id?: rstring
    bucket_arn: rstring
    encryption?: __data_aws_s3_bucket_inventory__destination__bucket__encryption[]
    format: rstring
    prefix?: rstring
}

export interface _data_aws_s3_bucket_inventory__destination {
    bucket: __data_aws_s3_bucket_inventory__destination__bucket[]
}

export interface _data_aws_s3_bucket_inventory__filter {
    prefix?: rstring
}

export interface _data_aws_s3_bucket_inventory__schedule {
    frequency: rstring
}

export interface data_aws_s3_bucket_inventory_config {
    bucket: rstring
    destination: _data_aws_s3_bucket_inventory__destination[]
    enabled?: rboolean
    filter?: _data_aws_s3_bucket_inventory__filter[]
    included_object_versions: rstring
    name: rstring
    optional_fields?: rstring[]
    schedule: _data_aws_s3_bucket_inventory__schedule[]
}

export class data_aws_s3_bucket_inventory implements Data {
    config: data_aws_s3_bucket_inventory_config
    private _is_data: boolean = true
    private _name: string = "data_aws_s3_bucket_inventory"
    private _id: string;
    constructor(id: string, config: data_aws_s3_bucket_inventory_config) {
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
    
    get ref_bucket(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bucket`)
  }
    get ref_destination(): Reference<_data_aws_s3_bucket_inventory__destination[]> {
        return new Reference(`data.${this._name}.${this._id}.destination`)
  }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enabled`)
  }
    get ref_filter(): Reference<_data_aws_s3_bucket_inventory__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_included_object_versions(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.included_object_versions`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_optional_fields(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.optional_fields`)
  }
    get ref_schedule(): Reference<_data_aws_s3_bucket_inventory__schedule[]> {
        return new Reference(`data.${this._name}.${this._id}.schedule`)
  }
}

