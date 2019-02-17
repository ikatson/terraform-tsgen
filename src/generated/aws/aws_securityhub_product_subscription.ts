import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_securityhub_product_subscription_config {
    arn?: rstring
    product_arn: rstring
}

export class aws_securityhub_product_subscription implements Resource {
    config: aws_securityhub_product_subscription_config
    private _is_data: boolean = false
    private _name: string = "aws_securityhub_product_subscription"
    private _id: string;
    constructor(id: string, config: aws_securityhub_product_subscription_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_product_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.product_arn`)
    }
}

