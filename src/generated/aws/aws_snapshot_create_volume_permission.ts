import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_snapshot_create_volume_permission_config {
    account_id: rstring
    snapshot_id: rstring
}

export class aws_snapshot_create_volume_permission implements Resource {
    config: aws_snapshot_create_volume_permission_config
    private _is_data: boolean = false
    private _name: string = "aws_snapshot_create_volume_permission"
    private _id: string;
    constructor(id: string, config: aws_snapshot_create_volume_permission_config) {
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
    
    get ref_account_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.account_id`)
    }
    get ref_snapshot_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.snapshot_id`)
    }
}

