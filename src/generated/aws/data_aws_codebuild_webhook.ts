import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_codebuild_webhook_config {
    branch_filter?: rstring
    payload_url?: rstring
    project_name: rstring
    secret?: rstring
    url?: rstring
}

export class data_aws_codebuild_webhook implements Data {
    config: data_aws_codebuild_webhook_config
    private _is_data: boolean = true
    private _name: string = "data_aws_codebuild_webhook"
    private _id: string;
    constructor(id: string, config: data_aws_codebuild_webhook_config) {
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
    
    get ref_branch_filter(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.branch_filter`)
  }
    get ref_payload_url(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.payload_url`)
  }
    get ref_project_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.project_name`)
  }
    get ref_secret(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.secret`)
  }
    get ref_url(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.url`)
  }
}

