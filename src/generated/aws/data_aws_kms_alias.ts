import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_kms_alias_config {
    arn?: rstring
    name: rstring
    target_key_arn?: rstring
    target_key_id?: rstring
}

export class data_aws_kms_alias implements Data {
    config: data_aws_kms_alias_config
    private _is_data: boolean = true
    private _name: string = "aws_kms_alias"
    private _id: string;
    constructor(id: string, config: data_aws_kms_alias_config) {
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
    get ref_target_key_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.target_key_arn`)
  }
    get ref_target_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.target_key_id`)
  }
}

