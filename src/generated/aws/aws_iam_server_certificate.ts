import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_server_certificate_config {
    arn?: rstring
    certificate_body: rstring
    certificate_chain?: rstring
    name?: rstring
    name_prefix?: rstring
    path?: rstring
    private_key: rstring
}

export class aws_iam_server_certificate implements Resource {
    config: aws_iam_server_certificate_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_server_certificate"
    private _id: string;
    constructor(id: string, config: aws_iam_server_certificate_config) {
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
    get ref_certificate_body(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_body`)
    }
    get ref_certificate_chain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_chain`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_path(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.path`)
    }
    get ref_private_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.private_key`)
    }
}

