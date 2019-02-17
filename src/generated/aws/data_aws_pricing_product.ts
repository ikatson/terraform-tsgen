import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_pricing_product__filters {
    field: rstring
    value: rstring
}

export interface data_aws_pricing_product_config {
    filters: _data_aws_pricing_product__filters[]
    result?: rstring
    service_code: rstring
}

export class data_aws_pricing_product implements Data {
    config: data_aws_pricing_product_config
    private _is_data: boolean = true
    private _name: string = "aws_pricing_product"
    private _id: string;
    constructor(id: string, config: data_aws_pricing_product_config) {
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
    
    get ref_filters(): Reference<_data_aws_pricing_product__filters[]> {
        return new Reference(`data.${this._name}.${this._id}.filters`)
  }
    get ref_result(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.result`)
  }
    get ref_service_code(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_code`)
  }
}

