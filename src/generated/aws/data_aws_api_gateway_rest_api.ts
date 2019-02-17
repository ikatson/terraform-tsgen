import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_api_gateway_rest_api_config {
    name: rstring
    root_resource_id?: rstring
}

export class data_aws_api_gateway_rest_api implements Data {
    config: data_aws_api_gateway_rest_api_config
    private _is_data: boolean = true
    private _name: string = "aws_api_gateway_rest_api"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_rest_api_config) {
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
    
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_root_resource_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.root_resource_id`)
  }
}

