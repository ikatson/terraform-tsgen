import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_lightsail_key_pair_config {
    arn?: rstring
    encrypted_fingerprint?: rstring
    encrypted_private_key?: rstring
    fingerprint?: rstring
    name?: rstring
    name_prefix?: rstring
    pgp_key?: rstring
    private_key?: rstring
    public_key?: rstring
}

export class aws_lightsail_key_pair implements Resource {
    config: aws_lightsail_key_pair_config
    private _is_data: boolean = false
    private _name: string = "aws_lightsail_key_pair"
    private _id: string;
    constructor(id: string, config: aws_lightsail_key_pair_config) {
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
    get ref_encrypted_fingerprint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.encrypted_fingerprint`)
    }
    get ref_encrypted_private_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.encrypted_private_key`)
    }
    get ref_fingerprint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.fingerprint`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_pgp_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.pgp_key`)
    }
    get ref_private_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.private_key`)
    }
    get ref_public_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.public_key`)
    }
}

