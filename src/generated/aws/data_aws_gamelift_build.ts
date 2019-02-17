import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_gamelift_build__storage_location {
    bucket: rstring
    key: rstring
    role_arn: rstring
}

export interface data_aws_gamelift_build_config {
    name: rstring
    operating_system: rstring
    storage_location: _data_aws_gamelift_build__storage_location[]
    version?: rstring
}

export class data_aws_gamelift_build implements Data {
    config: data_aws_gamelift_build_config
    private _is_data: boolean = true
    private _name: string = "data_aws_gamelift_build"
    private _id: string;
    constructor(id: string, config: data_aws_gamelift_build_config) {
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
    
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_operating_system(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.operating_system`)
  }
    get ref_storage_location(): Reference<_data_aws_gamelift_build__storage_location[]> {
        return new Reference(`data.${this._name}.${this._id}.storage_location`)
  }
    get ref_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.version`)
  }
}

