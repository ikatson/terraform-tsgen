import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ses_domain_dkim_config {
    dkim_tokens?: rstring[]
    domain: rstring
}

export class data_aws_ses_domain_dkim implements Data {
    config: data_aws_ses_domain_dkim_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ses_domain_dkim"
    private _id: string;
    constructor(id: string, config: data_aws_ses_domain_dkim_config) {
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
    
    get ref_dkim_tokens(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.dkim_tokens`)
  }
    get ref_domain(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.domain`)
  }
}

