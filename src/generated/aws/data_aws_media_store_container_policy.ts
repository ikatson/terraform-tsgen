import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_media_store_container_policy_config {
    container_name: rstring
    policy: rstring
}

export class data_aws_media_store_container_policy implements Data {
    config: data_aws_media_store_container_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_media_store_container_policy"
    private _id: string;
    constructor(id: string, config: data_aws_media_store_container_policy_config) {
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
    
    get ref_container_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.container_name`)
  }
    get ref_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy`)
  }
}

