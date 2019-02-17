import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_server_certificate_config {
    arn?: rstring
    certificate_body?: rstring
    certificate_chain?: rstring
    expiration_date?: rstring
    latest?: rboolean
    name?: rstring
    name_prefix?: rstring
    path?: rstring
    path_prefix?: rstring
    upload_date?: rstring
}

export class data_aws_iam_server_certificate implements Data {
    config: data_aws_iam_server_certificate_config
    private _is_data: boolean = true
    private _name: string = "aws_iam_server_certificate"
    private _id: string;
    constructor(id: string, config: data_aws_iam_server_certificate_config) {
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
    get ref_certificate_body(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.certificate_body`)
  }
    get ref_certificate_chain(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.certificate_chain`)
  }
    get ref_expiration_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.expiration_date`)
  }
    get ref_latest(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.latest`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_prefix`)
  }
    get ref_path(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.path`)
  }
    get ref_path_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.path_prefix`)
  }
    get ref_upload_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.upload_date`)
  }
}

