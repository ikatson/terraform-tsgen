import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_key_pair_config {
    fingerprint?: rstring
    key_name?: rstring
    key_name_prefix?: rstring
    public_key: rstring
}

export class aws_key_pair implements Resource {
    config: aws_key_pair_config
    private _is_data: boolean = false
    private _name: string = "aws_key_pair"
    private _id: string;
    constructor(id: string, config: aws_key_pair_config) {
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
        return new Reference(`${this._name}.${this._id}.fingerprint`)
    }
    get ref_key_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_name`)
    }
    get ref_key_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_name_prefix`)
    }
    get ref_public_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.public_key`)
    }
}

