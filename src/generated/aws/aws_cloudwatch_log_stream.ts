import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloudwatch_log_stream_config {
    arn?: rstring
    log_group_name: rstring
    name: rstring
}

export class aws_cloudwatch_log_stream implements Resource {
    config: aws_cloudwatch_log_stream_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudwatch_log_stream"
    private _id: string;
    constructor(id: string, config: aws_cloudwatch_log_stream_config) {
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
    get ref_log_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.log_group_name`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

