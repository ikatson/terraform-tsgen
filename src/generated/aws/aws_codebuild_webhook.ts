import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_codebuild_webhook_config {
    branch_filter?: rstring
    payload_url?: rstring
    project_name: rstring
    secret?: rstring
    url?: rstring
}

export class aws_codebuild_webhook implements Resource {
    config: aws_codebuild_webhook_config
    private _is_data: boolean = false
    private _name: string = "aws_codebuild_webhook"
    private _id: string;
    constructor(id: string, config: aws_codebuild_webhook_config) {
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
        return new Reference(`${this._name}.${this._id}.branch_filter`)
    }
    get ref_payload_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.payload_url`)
    }
    get ref_project_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.project_name`)
    }
    get ref_secret(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.secret`)
    }
    get ref_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.url`)
    }
}

