import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_sqs_queue_config {
    arn?: rstring
    name: rstring
    url?: rstring
}

export class data_aws_sqs_queue implements Data {
    config: data_aws_sqs_queue_config
    private _is_data: boolean = true
    private _name: string = "aws_sqs_queue"
    private _id: string;
    constructor(id: string, config: data_aws_sqs_queue_config) {
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
    get ref_url(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.url`)
  }
}

