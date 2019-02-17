import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_api_gateway_documentation_part__location {
    method?: rstring
    name?: rstring
    path?: rstring
    status_code?: rstring
    type: rstring
}

export interface data_aws_api_gateway_documentation_part_config {
    location: _data_aws_api_gateway_documentation_part__location[]
    properties: rstring
    rest_api_id: rstring
}

export class data_aws_api_gateway_documentation_part implements Data {
    config: data_aws_api_gateway_documentation_part_config
    private _is_data: boolean = true
    private _name: string = "data_aws_api_gateway_documentation_part"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_documentation_part_config) {
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
    
    get ref_location(): Reference<_data_aws_api_gateway_documentation_part__location[]> {
        return new Reference(`data.${this._name}.${this._id}.location`)
  }
    get ref_properties(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.properties`)
  }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rest_api_id`)
  }
}

