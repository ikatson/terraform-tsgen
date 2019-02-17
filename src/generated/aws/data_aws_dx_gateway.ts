import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_dx_gateway_config {
    amazon_side_asn?: rstring
    name: rstring
}

export class data_aws_dx_gateway implements Data {
    config: data_aws_dx_gateway_config
    private _is_data: boolean = true
    private _name: string = "aws_dx_gateway"
    private _id: string;
    constructor(id: string, config: data_aws_dx_gateway_config) {
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
    
    get ref_amazon_side_asn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.amazon_side_asn`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

