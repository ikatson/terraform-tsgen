import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_autoscaling_notification_config {
    group_names: rstring[]
    notifications: rstring[]
    topic_arn: rstring
}

export class data_aws_autoscaling_notification implements Data {
    config: data_aws_autoscaling_notification_config
    private _is_data: boolean = true
    private _name: string = "data_aws_autoscaling_notification"
    private _id: string;
    constructor(id: string, config: data_aws_autoscaling_notification_config) {
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
    
    get ref_group_names(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.group_names`)
  }
    get ref_notifications(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.notifications`)
  }
    get ref_topic_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.topic_arn`)
  }
}

