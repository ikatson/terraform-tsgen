import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_cloudwatch_log_resource_policy_config {
    policy_document: rstring
    policy_name: rstring
}

export class data_aws_cloudwatch_log_resource_policy implements Data {
    config: data_aws_cloudwatch_log_resource_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_cloudwatch_log_resource_policy"
    private _id: string;
    constructor(id: string, config: data_aws_cloudwatch_log_resource_policy_config) {
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
    
    get ref_policy_document(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy_document`)
  }
    get ref_policy_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy_name`)
  }
}

