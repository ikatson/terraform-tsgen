import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloudwatch_log_destination_config {
    arn?: rstring
    name: rstring
    role_arn: rstring
    target_arn: rstring
}

export class aws_cloudwatch_log_destination implements Resource {
    config: aws_cloudwatch_log_destination_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudwatch_log_destination"
    private _id: string;
    constructor(id: string, config: aws_cloudwatch_log_destination_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_arn`)
    }
    get ref_target_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.target_arn`)
    }
}

