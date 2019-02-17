import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_cloudwatch_dashboard_config {
    dashboard_arn?: rstring
    dashboard_body: rstring
    dashboard_name: rstring
}

export class data_aws_cloudwatch_dashboard implements Data {
    config: data_aws_cloudwatch_dashboard_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cloudwatch_dashboard"
    private _id: string;
    constructor(id: string, config: data_aws_cloudwatch_dashboard_config) {
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
        return new Reference(`data.${this._name}.${this._id}.dashboard_arn`)
  }
    get ref_dashboard_body(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.dashboard_body`)
  }
    get ref_dashboard_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.dashboard_name`)
  }
}

