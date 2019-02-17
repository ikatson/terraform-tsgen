import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_openid_connect_provider_config {
    arn?: rstring
    client_id_list: rstring[]
    thumbprint_list: rstring[]
    url: rstring
}

export class aws_iam_openid_connect_provider implements Resource {
    config: aws_iam_openid_connect_provider_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_openid_connect_provider"
    private _id: string;
    constructor(id: string, config: aws_iam_openid_connect_provider_config) {
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
    get ref_client_id_list(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.client_id_list`)
    }
    get ref_thumbprint_list(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.thumbprint_list`)
    }
    get ref_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.url`)
    }
}

