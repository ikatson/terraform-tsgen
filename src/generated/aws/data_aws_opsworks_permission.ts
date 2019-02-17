import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_opsworks_permission_config {
    allow_ssh?: rboolean
    allow_sudo?: rboolean
    level?: rstring
    stack_id?: rstring
    user_arn: rstring
}

export class data_aws_opsworks_permission implements Data {
    config: data_aws_opsworks_permission_config
    private _is_data: boolean = true
    private _name: string = "data_aws_opsworks_permission"
    private _id: string;
    constructor(id: string, config: data_aws_opsworks_permission_config) {
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
    
    get ref_allow_ssh(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.allow_ssh`)
  }
    get ref_allow_sudo(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.allow_sudo`)
  }
    get ref_level(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.level`)
  }
    get ref_stack_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.stack_id`)
  }
    get ref_user_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.user_arn`)
  }
}

