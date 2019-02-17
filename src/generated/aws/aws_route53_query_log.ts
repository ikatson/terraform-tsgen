import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_route53_query_log_config {
    cloudwatch_log_group_arn: rstring
    zone_id: rstring
}

export class aws_route53_query_log implements Resource {
    config: aws_route53_query_log_config
    private _is_data: boolean = false
    private _name: string = "aws_route53_query_log"
    private _id: string;
    constructor(id: string, config: aws_route53_query_log_config) {
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
    
    get ref_cloudwatch_log_group_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cloudwatch_log_group_arn`)
    }
    get ref_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.zone_id`)
    }
}

