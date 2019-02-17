import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_macie_member_account_association_config {
    member_account_id: rstring
}

export class data_aws_macie_member_account_association implements Data {
    config: data_aws_macie_member_account_association_config
    private _is_data: boolean = true
    private _name: string = "data_aws_macie_member_account_association"
    private _id: string;
    constructor(id: string, config: data_aws_macie_member_account_association_config) {
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
    
    get ref_member_account_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.member_account_id`)
  }
}

