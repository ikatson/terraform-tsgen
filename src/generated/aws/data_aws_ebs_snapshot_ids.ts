import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_ebs_snapshot_ids__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_ebs_snapshot_ids_config {
    filter?: _data_aws_ebs_snapshot_ids__filter[]
    ids?: rstring[]
    owners?: rstring[]
    restorable_by_user_ids?: rstring[]
}

export class data_aws_ebs_snapshot_ids implements Data {
    config: data_aws_ebs_snapshot_ids_config
    private _is_data: boolean = true
    private _name: string = "aws_ebs_snapshot_ids"
    private _id: string;
    constructor(id: string, config: data_aws_ebs_snapshot_ids_config) {
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
    
    get ref_filter(): Reference<_data_aws_ebs_snapshot_ids__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ids`)
  }
    get ref_owners(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.owners`)
  }
    get ref_restorable_by_user_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.restorable_by_user_ids`)
  }
}

