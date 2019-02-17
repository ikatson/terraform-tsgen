import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_servicecatalog_portfolio_config {
    arn?: rstring
    created_time?: rstring
    description?: rstring
    name: rstring
    provider_name?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_servicecatalog_portfolio implements Resource {
    config: aws_servicecatalog_portfolio_config
    private _is_data: boolean = false
    private _name: string = "aws_servicecatalog_portfolio"
    private _id: string;
    constructor(id: string, config: aws_servicecatalog_portfolio_config) {
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
    get ref_created_time(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.created_time`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_provider_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.provider_name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

