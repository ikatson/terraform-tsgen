import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_datasync_location_nfs__on_prem_config {
    agent_arns: rstring[]
}

export interface data_aws_datasync_location_nfs_config {
    arn?: rstring
    on_prem_config: _data_aws_datasync_location_nfs__on_prem_config[]
    server_hostname: rstring
    subdirectory: rstring
    tags?: {[propName: string]: rstring}
    uri?: rstring
}

export class data_aws_datasync_location_nfs implements Data {
    config: data_aws_datasync_location_nfs_config
    private _is_data: boolean = true
    private _name: string = "data_aws_datasync_location_nfs"
    private _id: string;
    constructor(id: string, config: data_aws_datasync_location_nfs_config) {
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
    get ref_on_prem_config(): Reference<_data_aws_datasync_location_nfs__on_prem_config[]> {
        return new Reference(`data.${this._name}.${this._id}.on_prem_config`)
  }
    get ref_server_hostname(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.server_hostname`)
  }
    get ref_subdirectory(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subdirectory`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_uri(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.uri`)
  }
}

