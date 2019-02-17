import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_key_pair_config {
    fingerprint?: rstring
    key_name?: rstring
    key_name_prefix?: rstring
    public_key: rstring
}

export class data_aws_key_pair implements Data {
    config: data_aws_key_pair_config
    private _is_data: boolean = true
    private _name: string = "data_aws_key_pair"
    private _id: string;
    constructor(id: string, config: data_aws_key_pair_config) {
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
    
    get ref_fingerprint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.fingerprint`)
  }
    get ref_key_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_name`)
  }
    get ref_key_name_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.key_name_prefix`)
  }
    get ref_public_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.public_key`)
  }
}

