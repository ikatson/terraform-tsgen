import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ses_receipt_rule_set_config {
    rule_set_name: rstring
}

export class aws_ses_receipt_rule_set implements Resource {
    config: aws_ses_receipt_rule_set_config
    private _is_data: boolean = false
    private _name: string = "aws_ses_receipt_rule_set"
    private _id: string;
    constructor(id: string, config: aws_ses_receipt_rule_set_config) {
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
        return new Reference(`${this._name}.${this._id}.rule_set_name`)
    }
}

