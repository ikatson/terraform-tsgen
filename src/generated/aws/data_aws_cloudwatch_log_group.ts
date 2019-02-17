import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_cloudwatch_log_group_config {
    arn?: rstring
    creation_time?: rnumber
    name: rstring
}

export class data_aws_cloudwatch_log_group implements Data {
    config: data_aws_cloudwatch_log_group_config
    private _is_data: boolean = true
    private _name: string = "aws_cloudwatch_log_group"
    private _id: string;
    constructor(id: string, config: data_aws_cloudwatch_log_group_config) {
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
    get ref_creation_time(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.creation_time`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

