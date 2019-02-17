import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_api_gateway_resource_config {
    parent_id?: rstring
    path: rstring
    path_part?: rstring
    rest_api_id: rstring
}

export class data_aws_api_gateway_resource implements Data {
    config: data_aws_api_gateway_resource_config
    private _is_data: boolean = true
    private _name: string = "aws_api_gateway_resource"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_resource_config) {
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
    
    get ref_parent_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.parent_id`)
  }
    get ref_path(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.path`)
  }
    get ref_path_part(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.path_part`)
  }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rest_api_id`)
  }
}

