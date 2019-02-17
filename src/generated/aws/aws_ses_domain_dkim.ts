import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ses_domain_dkim_config {
    dkim_tokens?: rstring[]
    domain: rstring
}

export class aws_ses_domain_dkim implements Resource {
    config: aws_ses_domain_dkim_config
    private _is_data: boolean = false
    private _name: string = "aws_ses_domain_dkim"
    private _id: string;
    constructor(id: string, config: aws_ses_domain_dkim_config) {
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
        return new Reference(`${this._name}.${this._id}.dkim_tokens`)
    }
    get ref_domain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain`)
    }
}

