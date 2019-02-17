import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_pinpoint_baidu_channel_config {
    api_key: rstring
    application_id: rstring
    enabled?: rboolean
    secret_key: rstring
}

export class aws_pinpoint_baidu_channel implements Resource {
    config: aws_pinpoint_baidu_channel_config
    private _is_data: boolean = false
    private _name: string = "aws_pinpoint_baidu_channel"
    private _id: string;
    constructor(id: string, config: aws_pinpoint_baidu_channel_config) {
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
    
    get ref_api_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.api_key`)
    }
    get ref_application_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.application_id`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_secret_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.secret_key`)
    }
}

