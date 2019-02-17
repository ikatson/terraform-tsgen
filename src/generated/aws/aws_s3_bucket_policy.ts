import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_s3_bucket_policy_config {
    bucket: rstring
    policy: rstring
}

export class aws_s3_bucket_policy implements Resource {
    config: aws_s3_bucket_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_s3_bucket_policy"
    private _id: string;
    constructor(id: string, config: aws_s3_bucket_policy_config) {
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
    
    get ref_bucket(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.bucket`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
}

