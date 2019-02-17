import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_datasync_agent_config {
    activation_key?: rstring
    arn?: rstring
    ip_address?: rstring
    name?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_datasync_agent implements Data {
    config: data_aws_datasync_agent_config
    private _is_data: boolean = true
    private _name: string = "data_aws_datasync_agent"
    private _id: string;
    constructor(id: string, config: data_aws_datasync_agent_config) {
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
        return new Reference(`data.${this._name}.${this._id}.activation_key`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_ip_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ip_address`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

