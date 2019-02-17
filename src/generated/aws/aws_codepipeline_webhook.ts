import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_codepipeline_webhook__authentication_configuration {
    allowed_ip_range?: rstring
    secret_token?: rstring
}

export interface _aws_codepipeline_webhook__filter {
    json_path: rstring
    match_equals: rstring
}

export interface aws_codepipeline_webhook_config {
    authentication: rstring
    authentication_configuration?: _aws_codepipeline_webhook__authentication_configuration[]
    filter: _aws_codepipeline_webhook__filter[]
    name: rstring
    target_action: rstring
    target_pipeline: rstring
    url?: rstring
}

export class aws_codepipeline_webhook implements Resource {
    config: aws_codepipeline_webhook_config
    private _is_data: boolean = false
    private _name: string = "aws_codepipeline_webhook"
    private _id: string;
    constructor(id: string, config: aws_codepipeline_webhook_config) {
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
    
    get ref_authentication(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.authentication`)
    }
    get ref_authentication_configuration(): Reference<_aws_codepipeline_webhook__authentication_configuration[]> {
        return new Reference(`${this._name}.${this._id}.authentication_configuration`)
    }
    get ref_filter(): Reference<_aws_codepipeline_webhook__filter[]> {
        return new Reference(`${this._name}.${this._id}.filter`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_target_action(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.target_action`)
    }
    get ref_target_pipeline(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.target_pipeline`)
    }
    get ref_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.url`)
    }
}

