import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_saml_provider_config {
    arn?: rstring
    name: rstring
    saml_metadata_document: rstring
    valid_until?: rstring
}

export class data_aws_iam_saml_provider implements Data {
    config: data_aws_iam_saml_provider_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iam_saml_provider"
    private _id: string;
    constructor(id: string, config: data_aws_iam_saml_provider_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_saml_metadata_document(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.saml_metadata_document`)
  }
    get ref_valid_until(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.valid_until`)
  }
}

