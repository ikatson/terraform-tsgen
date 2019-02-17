import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_internet_gateway__attachments {
    state?: rstring
    vpc_id?: rstring
}

export interface _data_aws_internet_gateway__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_internet_gateway_config {
    attachments?: _data_aws_internet_gateway__attachments[]
    filter?: _data_aws_internet_gateway__filter[]
    internet_gateway_id?: rstring
    owner_id?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_internet_gateway implements Data {
    config: data_aws_internet_gateway_config
    private _is_data: boolean = true
    private _name: string = "aws_internet_gateway"
    private _id: string;
    constructor(id: string, config: data_aws_internet_gateway_config) {
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
    
    get ref_attachments(): Reference<_data_aws_internet_gateway__attachments[]> {
        return new Reference(`data.${this._name}.${this._id}.attachments`)
  }
    get ref_filter(): Reference<_data_aws_internet_gateway__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_internet_gateway_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.internet_gateway_id`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

