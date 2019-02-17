import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_opsworks_user_profile_config {
    allow_self_management?: rboolean
    ssh_public_key?: rstring
    ssh_username: rstring
    user_arn: rstring
}

export class data_aws_opsworks_user_profile implements Data {
    config: data_aws_opsworks_user_profile_config
    private _is_data: boolean = true
    private _name: string = "data_aws_opsworks_user_profile"
    private _id: string;
    constructor(id: string, config: data_aws_opsworks_user_profile_config) {
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
    
    get ref_allow_self_management(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.allow_self_management`)
  }
    get ref_ssh_public_key(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ssh_public_key`)
  }
    get ref_ssh_username(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ssh_username`)
  }
    get ref_user_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_arn`)
  }
}

