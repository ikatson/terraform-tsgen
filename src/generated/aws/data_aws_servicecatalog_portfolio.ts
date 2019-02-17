import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_servicecatalog_portfolio_config {
    arn?: rstring
    created_time?: rstring
    description?: rstring
    name: rstring
    provider_name?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_servicecatalog_portfolio implements Data {
    config: data_aws_servicecatalog_portfolio_config
    private _is_data: boolean = true
    private _name: string = "data_aws_servicecatalog_portfolio"
    private _id: string;
    constructor(id: string, config: data_aws_servicecatalog_portfolio_config) {
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
    get ref_created_time(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.created_time`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_provider_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.provider_name`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

