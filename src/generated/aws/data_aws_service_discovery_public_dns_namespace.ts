import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_service_discovery_public_dns_namespace_config {
    arn?: rstring
    description?: rstring
    hosted_zone?: rstring
    name: rstring
}

export class data_aws_service_discovery_public_dns_namespace implements Data {
    config: data_aws_service_discovery_public_dns_namespace_config
    private _is_data: boolean = true
    private _name: string = "data_aws_service_discovery_public_dns_namespace"
    private _id: string;
    constructor(id: string, config: data_aws_service_discovery_public_dns_namespace_config) {
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
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_hosted_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.hosted_zone`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

