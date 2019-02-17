import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_autoscaling_lifecycle_hook_config {
    autoscaling_group_name: rstring
    default_result?: rstring
    heartbeat_timeout?: rnumber
    lifecycle_transition: rstring
    name: rstring
    notification_metadata?: rstring
    notification_target_arn?: rstring
    role_arn?: rstring
}

export class data_aws_autoscaling_lifecycle_hook implements Data {
    config: data_aws_autoscaling_lifecycle_hook_config
    private _is_data: boolean = true
    private _name: string = "data_aws_autoscaling_lifecycle_hook"
    private _id: string;
    constructor(id: string, config: data_aws_autoscaling_lifecycle_hook_config) {
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
    
    get ref_autoscaling_group_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.autoscaling_group_name`)
  }
    get ref_default_result(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_result`)
  }
    get ref_heartbeat_timeout(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.heartbeat_timeout`)
  }
    get ref_lifecycle_transition(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.lifecycle_transition`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_notification_metadata(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.notification_metadata`)
  }
    get ref_notification_target_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.notification_target_arn`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
}

