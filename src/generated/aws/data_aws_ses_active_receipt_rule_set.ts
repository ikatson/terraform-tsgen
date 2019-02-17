import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ses_active_receipt_rule_set_config {
    rule_set_name: rstring
}

export class data_aws_ses_active_receipt_rule_set implements Data {
    config: data_aws_ses_active_receipt_rule_set_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ses_active_receipt_rule_set"
    private _id: string;
    constructor(id: string, config: data_aws_ses_active_receipt_rule_set_config) {
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
    
    get ref_rule_set_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rule_set_name`)
  }
}

