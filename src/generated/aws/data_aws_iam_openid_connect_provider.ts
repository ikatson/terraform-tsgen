import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_iam_openid_connect_provider_config {
    arn?: rstring
    client_id_list: rstring[]
    thumbprint_list: rstring[]
    url: rstring
}

export class data_aws_iam_openid_connect_provider implements Data {
    config: data_aws_iam_openid_connect_provider_config
    private _is_data: boolean = true
    private _name: string = "data_aws_iam_openid_connect_provider"
    private _id: string;
    constructor(id: string, config: data_aws_iam_openid_connect_provider_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_client_id_list(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.client_id_list`)
  }
    get ref_thumbprint_list(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.thumbprint_list`)
  }
    get ref_url(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.url`)
  }
}

