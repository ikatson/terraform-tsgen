import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ses_receipt_filter_config {
    cidr: rstring
    name: rstring
    policy: rstring
}

export class aws_ses_receipt_filter implements Resource {
    config: aws_ses_receipt_filter_config
    private _is_data: boolean = false
    private _name: string = "aws_ses_receipt_filter"
    private _id: string;
    constructor(id: string, config: aws_ses_receipt_filter_config) {
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
    
    get ref_cidr(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cidr`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
}

