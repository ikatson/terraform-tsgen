import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_securityhub_product_subscription_config {
    arn?: rstring
    product_arn: rstring
}

export class data_aws_securityhub_product_subscription implements Data {
    config: data_aws_securityhub_product_subscription_config
    private _is_data: boolean = true
    private _name: string = "data_aws_securityhub_product_subscription"
    private _id: string;
    constructor(id: string, config: data_aws_securityhub_product_subscription_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_product_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.product_arn`)
  }
}

