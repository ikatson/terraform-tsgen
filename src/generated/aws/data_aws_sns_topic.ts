import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_sns_topic_config {
    arn?: rstring
    name: rstring
}

export class data_aws_sns_topic implements Data {
    config: data_aws_sns_topic_config
    private _is_data: boolean = true
    private _name: string = "aws_sns_topic"
    private _id: string;
    constructor(id: string, config: data_aws_sns_topic_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

