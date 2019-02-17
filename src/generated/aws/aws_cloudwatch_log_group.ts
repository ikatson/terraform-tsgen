import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloudwatch_log_group_config {
    arn?: rstring
    kms_key_id?: rstring
    name?: rstring
    name_prefix?: rstring
    retention_in_days?: rnumber
    tags?: {[propName: string]: rstring}
}

export class aws_cloudwatch_log_group implements Resource {
    config: aws_cloudwatch_log_group_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudwatch_log_group"
    private _id: string;
    constructor(id: string, config: aws_cloudwatch_log_group_config) {
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
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_key_id`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_retention_in_days(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.retention_in_days`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

