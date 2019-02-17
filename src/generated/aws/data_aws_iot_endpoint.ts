import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iot_endpoint_config {
    endpoint_address?: rstring
    endpoint_type?: rstring
}

export class data_aws_iot_endpoint implements Data {
    config: data_aws_iot_endpoint_config
    private _is_data: boolean = true
    private _name: string = "aws_iot_endpoint"
    private _id: string;
    constructor(id: string, config: data_aws_iot_endpoint_config) {
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
    
    get ref_endpoint_address(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint_address`)
  }
    get ref_endpoint_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint_type`)
  }
}

