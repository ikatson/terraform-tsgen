import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ssm_parameter_config {
    arn?: rstring
    name: rstring
    type?: rstring
    value?: rstring
    with_decryption?: rboolean
}

export class data_aws_ssm_parameter implements Data {
    config: data_aws_ssm_parameter_config
    private _is_data: boolean = true
    private _name: string = "aws_ssm_parameter"
    private _id: string;
    constructor(id: string, config: data_aws_ssm_parameter_config) {
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
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
    get ref_value(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.value`)
  }
    get ref_with_decryption(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.with_decryption`)
  }
}

