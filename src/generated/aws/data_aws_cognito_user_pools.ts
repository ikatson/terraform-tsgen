import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_cognito_user_pools_config {
    arns?: rstring[]
    ids?: rstring[]
    name: rstring
}

export class data_aws_cognito_user_pools implements Data {
    config: data_aws_cognito_user_pools_config
    private _is_data: boolean = true
    private _name: string = "aws_cognito_user_pools"
    private _id: string;
    constructor(id: string, config: data_aws_cognito_user_pools_config) {
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
    
    get ref_arns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.arns`)
  }
    get ref_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ids`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

