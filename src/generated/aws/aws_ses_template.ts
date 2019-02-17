import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ses_template_config {
    html?: rstring
    name: rstring
    subject?: rstring
    text?: rstring
}

export class aws_ses_template implements Resource {
    config: aws_ses_template_config
    private _is_data: boolean = false
    private _name: string = "aws_ses_template"
    private _id: string;
    constructor(id: string, config: aws_ses_template_config) {
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
    
    get ref_html(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.html`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_subject(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subject`)
    }
    get ref_text(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.text`)
    }
}

