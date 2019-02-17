import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_codedeploy_app_config {
    compute_platform?: rstring
    name: rstring
    unique_id?: rstring
}

export class data_aws_codedeploy_app implements Data {
    config: data_aws_codedeploy_app_config
    private _is_data: boolean = true
    private _name: string = "data_aws_codedeploy_app"
    private _id: string;
    constructor(id: string, config: data_aws_codedeploy_app_config) {
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
    
    get ref_compute_platform(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.compute_platform`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_unique_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.unique_id`)
  }
}

