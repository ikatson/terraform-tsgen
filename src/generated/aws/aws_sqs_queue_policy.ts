import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_sqs_queue_policy_config {
    policy: rstring
    queue_url: rstring
}

export class aws_sqs_queue_policy implements Resource {
    config: aws_sqs_queue_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_sqs_queue_policy"
    private _id: string;
    constructor(id: string, config: aws_sqs_queue_policy_config) {
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
    
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_queue_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.queue_url`)
    }
}

