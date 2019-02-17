import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ses_receipt_filter_config {
    cidr: rstring
    name: rstring
    policy: rstring
}

export class data_aws_ses_receipt_filter implements Data {
    config: data_aws_ses_receipt_filter_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ses_receipt_filter"
    private _id: string;
    constructor(id: string, config: data_aws_ses_receipt_filter_config) {
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
        return new Reference(`data.${this._name}.${this._id}.cidr`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy`)
  }
}

