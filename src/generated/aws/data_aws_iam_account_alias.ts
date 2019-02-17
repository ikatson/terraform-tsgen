import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_account_alias_config {
    account_alias?: rstring
}

export class data_aws_iam_account_alias implements Data {
    config: data_aws_iam_account_alias_config
    private _is_data: boolean = true
    private _name: string = "aws_iam_account_alias"
    private _id: string;
    constructor(id: string, config: data_aws_iam_account_alias_config) {
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
    
    get ref_account_alias(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.account_alias`)
  }
}

