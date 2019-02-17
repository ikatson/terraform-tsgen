import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_kms_key_config {
    arn?: rstring
    aws_account_id?: rstring
    creation_date?: rstring
    deletion_date?: rstring
    description?: rstring
    enabled?: rboolean
    expiration_model?: rstring
    grant_tokens?: rstring[]
    key_id: rstring
    key_manager?: rstring
    key_state?: rstring
    key_usage?: rstring
    origin?: rstring
    valid_to?: rstring
}

export class data_aws_kms_key implements Data {
    config: data_aws_kms_key_config
    private _is_data: boolean = true
    private _name: string = "aws_kms_key"
    private _id: string;
    constructor(id: string, config: data_aws_kms_key_config) {
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
    get ref_aws_account_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.aws_account_id`)
  }
    get ref_creation_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.creation_date`)
  }
    get ref_deletion_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.deletion_date`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enabled`)
  }
    get ref_expiration_model(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.expiration_model`)
  }
    get ref_grant_tokens(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.grant_tokens`)
  }
    get ref_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_id`)
  }
    get ref_key_manager(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_manager`)
  }
    get ref_key_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_state`)
  }
    get ref_key_usage(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_usage`)
  }
    get ref_origin(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.origin`)
  }
    get ref_valid_to(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.valid_to`)
  }
}

