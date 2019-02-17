import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloudwatch_log_destination_policy_config {
    access_policy: rstring
    destination_name: rstring
}

export class aws_cloudwatch_log_destination_policy implements Resource {
    config: aws_cloudwatch_log_destination_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudwatch_log_destination_policy"
    private _id: string;
    constructor(id: string, config: aws_cloudwatch_log_destination_policy_config) {
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
    
    get ref_access_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.access_policy`)
    }
    get ref_destination_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.destination_name`)
    }
}

