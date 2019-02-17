import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_storagegateway_local_disk_config {
    disk_id?: rstring
    disk_node?: rstring
    disk_path?: rstring
    gateway_arn: rstring
}

export class data_aws_storagegateway_local_disk implements Data {
    config: data_aws_storagegateway_local_disk_config
    private _is_data: boolean = true
    private _name: string = "aws_storagegateway_local_disk"
    private _id: string;
    constructor(id: string, config: data_aws_storagegateway_local_disk_config) {
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
    get ref_disk_node(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.disk_node`)
  }
    get ref_disk_path(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.disk_path`)
  }
    get ref_gateway_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_arn`)
  }
}

