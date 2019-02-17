import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_media_package_channel__hls_ingest__ingest_endpoints {
    password?: rstring
    url?: rstring
    username?: rstring
}

export interface _aws_media_package_channel__hls_ingest {
    ingest_endpoints?: __aws_media_package_channel__hls_ingest__ingest_endpoints[]
}

export interface aws_media_package_channel_config {
    arn?: rstring
    channel_id: rstring
    description?: rstring
    hls_ingest?: _aws_media_package_channel__hls_ingest[]
}

export class aws_media_package_channel implements Resource {
    config: aws_media_package_channel_config
    private _is_data: boolean = false
    private _name: string = "aws_media_package_channel"
    private _id: string;
    constructor(id: string, config: aws_media_package_channel_config) {
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
    get ref_channel_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.channel_id`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_hls_ingest(): Reference<_aws_media_package_channel__hls_ingest[]> {
        return new Reference(`${this._name}.${this._id}.hls_ingest`)
    }
}

