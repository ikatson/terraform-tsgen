import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ses_domain_mail_from_config {
    behavior_on_mx_failure?: rstring
    domain: rstring
    mail_from_domain: rstring
}

export class aws_ses_domain_mail_from implements Resource {
    config: aws_ses_domain_mail_from_config
    private _is_data: boolean = false
    private _name: string = "aws_ses_domain_mail_from"
    private _id: string;
    constructor(id: string, config: aws_ses_domain_mail_from_config) {
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
    
    get ref_behavior_on_mx_failure(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.behavior_on_mx_failure`)
    }
    get ref_domain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain`)
    }
    get ref_mail_from_domain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.mail_from_domain`)
    }
}

