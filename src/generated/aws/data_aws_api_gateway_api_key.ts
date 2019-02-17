import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_api_gateway_api_key_config {
    id: rstring
    name?: rstring
    value?: rstring
}

export class data_aws_api_gateway_api_key implements Data {
    config: data_aws_api_gateway_api_key_config
    private _is_data: boolean = true
    private _name: string = "aws_api_gateway_api_key"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_api_key_config) {
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
    
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_value(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.value`)
  }
}

