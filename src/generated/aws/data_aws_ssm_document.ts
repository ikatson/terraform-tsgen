import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ssm_document_config {
    arn?: rstring
    content?: rstring
    document_format?: rstring
    document_type?: rstring
    document_version?: rstring
    name: rstring
}

export class data_aws_ssm_document implements Data {
    config: data_aws_ssm_document_config
    private _is_data: boolean = true
    private _name: string = "aws_ssm_document"
    private _id: string;
    constructor(id: string, config: data_aws_ssm_document_config) {
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
    get ref_content(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.content`)
  }
    get ref_document_format(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.document_format`)
  }
    get ref_document_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.document_type`)
  }
    get ref_document_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.document_version`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

