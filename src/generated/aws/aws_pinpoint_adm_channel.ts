import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_pinpoint_adm_channel_config {
    application_id: rstring
    client_id: rstring
    client_secret: rstring
    enabled?: rboolean
}

export class aws_pinpoint_adm_channel implements Resource {
    config: aws_pinpoint_adm_channel_config
    private _is_data: boolean = false
    private _name: string = "aws_pinpoint_adm_channel"
    private _id: string;
    constructor(id: string, config: aws_pinpoint_adm_channel_config) {
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
    
    get ref_application_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.application_id`)
    }
    get ref_client_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.client_id`)
    }
    get ref_client_secret(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.client_secret`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
}

