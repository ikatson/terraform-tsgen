import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloudfront_public_key_config {
    caller_reference?: rstring
    comment?: rstring
    encoded_key: rstring
    etag?: rstring
    name?: rstring
    name_prefix?: rstring
}

export class aws_cloudfront_public_key implements Resource {
    config: aws_cloudfront_public_key_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudfront_public_key"
    private _id: string;
    constructor(id: string, config: aws_cloudfront_public_key_config) {
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
    
    get ref_caller_reference(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.caller_reference`)
    }
    get ref_comment(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.comment`)
    }
    get ref_encoded_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.encoded_key`)
    }
    get ref_etag(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.etag`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
}

