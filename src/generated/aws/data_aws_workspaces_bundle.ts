import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_workspaces_bundle__compute_type {
    name?: rstring
}

export interface _data_aws_workspaces_bundle__root_storage {
    capacity?: rstring
}

export interface _data_aws_workspaces_bundle__user_storage {
    capacity?: rstring
}

export interface data_aws_workspaces_bundle_config {
    bundle_id: rstring
    compute_type?: _data_aws_workspaces_bundle__compute_type[]
    description?: rstring
    name?: rstring
    owner?: rstring
    root_storage?: _data_aws_workspaces_bundle__root_storage[]
    user_storage?: _data_aws_workspaces_bundle__user_storage[]
}

export class data_aws_workspaces_bundle implements Data {
    config: data_aws_workspaces_bundle_config
    private _is_data: boolean = true
    private _name: string = "aws_workspaces_bundle"
    private _id: string;
    constructor(id: string, config: data_aws_workspaces_bundle_config) {
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
    
    get ref_bundle_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bundle_id`)
  }
    get ref_compute_type(): Reference<_data_aws_workspaces_bundle__compute_type[]> {
        return new Reference(`data.${this._name}.${this._id}.compute_type`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_owner(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner`)
  }
    get ref_root_storage(): Reference<_data_aws_workspaces_bundle__root_storage[]> {
        return new Reference(`data.${this._name}.${this._id}.root_storage`)
  }
    get ref_user_storage(): Reference<_data_aws_workspaces_bundle__user_storage[]> {
        return new Reference(`data.${this._name}.${this._id}.user_storage`)
  }
}

