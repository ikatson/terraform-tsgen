import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_api_gateway_client_certificate_config {
    created_date?: rstring
    description?: rstring
    expiration_date?: rstring
    pem_encoded_certificate?: rstring
}

export class data_aws_api_gateway_client_certificate implements Data {
    config: data_aws_api_gateway_client_certificate_config
    private _is_data: boolean = true
    private _name: string = "data_aws_api_gateway_client_certificate"
    private _id: string;
    constructor(id: string, config: data_aws_api_gateway_client_certificate_config) {
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
    
    get ref_created_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.created_date`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_expiration_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.expiration_date`)
  }
    get ref_pem_encoded_certificate(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.pem_encoded_certificate`)
  }
}

