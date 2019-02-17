import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_storagegateway_cache_config {
    disk_id: rstring
    gateway_arn: rstring
}

export class data_aws_storagegateway_cache implements Data {
    config: data_aws_storagegateway_cache_config
    private _is_data: boolean = true
    private _name: string = "data_aws_storagegateway_cache"
    private _id: string;
    constructor(id: string, config: data_aws_storagegateway_cache_config) {
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
    
    get ref_disk_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.disk_id`)
  }
    get ref_gateway_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_arn`)
  }
}

