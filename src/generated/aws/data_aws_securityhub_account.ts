import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_securityhub_account_config {
}

export class data_aws_securityhub_account implements Data {
    config: data_aws_securityhub_account_config
    private _is_data: boolean = true
    private _name: string = "data_aws_securityhub_account"
    private _id: string;
    constructor(id: string, config: data_aws_securityhub_account_config) {
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
    
}

