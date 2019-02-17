import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_account_alias_config {
    account_alias: rstring
}

export class aws_iam_account_alias implements Resource {
    config: aws_iam_account_alias_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_account_alias"
    private _id: string;
    constructor(id: string, config: aws_iam_account_alias_config) {
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
        return new Reference(`${this._name}.${this._id}.account_alias`)
    }
}

