import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_datasync_location_nfs__on_prem_config {
    agent_arns: rstring[]
}

export interface aws_datasync_location_nfs_config {
    arn?: rstring
    on_prem_config: _aws_datasync_location_nfs__on_prem_config[]
    server_hostname: rstring
    subdirectory: rstring
    tags?: {[propName: string]: rstring}
    uri?: rstring
}

export class aws_datasync_location_nfs implements Resource {
    config: aws_datasync_location_nfs_config
    private _is_data: boolean = false
    private _name: string = "aws_datasync_location_nfs"
    private _id: string;
    constructor(id: string, config: aws_datasync_location_nfs_config) {
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
    get ref_on_prem_config(): Reference<_aws_datasync_location_nfs__on_prem_config[]> {
        return new Reference(`${this._name}.${this._id}.on_prem_config`)
    }
    get ref_server_hostname(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.server_hostname`)
    }
    get ref_subdirectory(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subdirectory`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_uri(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.uri`)
    }
}

