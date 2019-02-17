import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_api_gateway_documentation_version_config {
    description?: rstring
    rest_api_id: rstring
    version: rstring
}

export class data_aws_api_gateway_documentation_version implements Data {
    config: data_aws_api_gateway_documentation_version_config
    private _is_data: boolean = true
    private _name: string = "data_aws_api_gateway_documentation_version"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_documentation_version_config) {
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
    
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rest_api_id`)
  }
    get ref_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.version`)
  }
}

