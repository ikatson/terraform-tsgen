import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_datasync_agent_config {
    activation_key?: rstring
    arn?: rstring
    ip_address?: rstring
    name?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_datasync_agent implements Resource {
    config: aws_datasync_agent_config
    private _is_data: boolean = false
    private _name: string = "aws_datasync_agent"
    private _id: string;
    constructor(id: string, config: aws_datasync_agent_config) {
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
    
    get ref_activation_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.activation_key`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_ip_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ip_address`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

