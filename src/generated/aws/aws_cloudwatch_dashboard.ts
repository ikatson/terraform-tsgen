import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloudwatch_dashboard_config {
    dashboard_arn?: rstring
    dashboard_body: rstring
    dashboard_name: rstring
}

export class aws_cloudwatch_dashboard implements Resource {
    config: aws_cloudwatch_dashboard_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudwatch_dashboard"
    private _id: string;
    constructor(id: string, config: aws_cloudwatch_dashboard_config) {
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
    
    get ref_dashboard_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dashboard_arn`)
    }
    get ref_dashboard_body(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dashboard_body`)
    }
    get ref_dashboard_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dashboard_name`)
    }
}

