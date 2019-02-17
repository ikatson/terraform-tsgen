import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ssm_activation_config {
    activation_code?: rstring
    description?: rstring
    expiration_date?: rstring
    expired?: rstring
    iam_role: rstring
    name?: rstring
    registration_count?: rnumber
    registration_limit?: rnumber
}

export class data_aws_ssm_activation implements Data {
    config: data_aws_ssm_activation_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ssm_activation"
    private _id: string;
    constructor(id: string, config: data_aws_ssm_activation_config) {
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
    
    get ref_activation_code(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.activation_code`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_expiration_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.expiration_date`)
  }
    get ref_expired(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.expired`)
  }
    get ref_iam_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.iam_role`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_registration_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.registration_count`)
  }
    get ref_registration_limit(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.registration_limit`)
  }
}

