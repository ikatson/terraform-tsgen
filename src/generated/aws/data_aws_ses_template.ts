import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ses_template_config {
    html?: rstring
    name: rstring
    subject?: rstring
    text?: rstring
}

export class data_aws_ses_template implements Data {
    config: data_aws_ses_template_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ses_template"
    private _id: string;
    constructor(id: string, config: data_aws_ses_template_config) {
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
        return new Reference(`data.${this._name}.${this._id}.html`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_subject(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subject`)
  }
    get ref_text(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.text`)
  }
}

