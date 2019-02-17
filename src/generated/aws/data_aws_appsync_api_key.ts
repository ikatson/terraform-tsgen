import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_appsync_api_key_config {
    api_id: rstring
    description?: rstring
    expires?: rstring
    key?: rstring
}

export class data_aws_appsync_api_key implements Data {
    config: data_aws_appsync_api_key_config
    private _is_data: boolean = true
    private _name: string = "data_aws_appsync_api_key"
    private _id: string;
    constructor(id: string, config: data_aws_appsync_api_key_config) {
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
    
    get ref_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.api_id`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_expires(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.expires`)
  }
    get ref_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key`)
  }
}

