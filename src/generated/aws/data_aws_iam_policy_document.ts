import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_iam_policy_document__statement__condition {
    test: rstring
    values: rstring[]
    variable: rstring
}

export interface __data_aws_iam_policy_document__statement__not_principals {
    identifiers: rstring[]
    type: rstring
}

export interface __data_aws_iam_policy_document__statement__principals {
    identifiers: rstring[]
    type: rstring
}

export interface _data_aws_iam_policy_document__statement {
    actions?: rstring[]
    condition?: __data_aws_iam_policy_document__statement__condition[]
    effect?: rstring
    not_actions?: rstring[]
    not_principals?: __data_aws_iam_policy_document__statement__not_principals[]
    not_resources?: rstring[]
    principals?: __data_aws_iam_policy_document__statement__principals[]
    resources?: rstring[]
    sid?: rstring
}

export interface data_aws_iam_policy_document_config {
    json?: rstring
    override_json?: rstring
    policy_id?: rstring
    source_json?: rstring
    statement?: _data_aws_iam_policy_document__statement[]
    version?: rstring
}

export class data_aws_iam_policy_document implements Data {
    config: data_aws_iam_policy_document_config
    private _is_data: boolean = true
    private _name: string = "aws_iam_policy_document"
    private _id: string;
    constructor(id: string, config: data_aws_iam_policy_document_config) {
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
    
    get ref_json(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.json`)
  }
    get ref_override_json(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.override_json`)
  }
    get ref_policy_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy_id`)
  }
    get ref_source_json(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_json`)
  }
    get ref_statement(): Reference<_data_aws_iam_policy_document__statement[]> {
        return new Reference(`data.${this._name}.${this._id}.statement`)
  }
    get ref_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.version`)
  }
}

