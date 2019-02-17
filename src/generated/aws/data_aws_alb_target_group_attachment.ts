import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_alb_target_group_attachment_config {
    availability_zone?: rstring
    port?: rnumber
    target_group_arn: rstring
    target_id: rstring
}

export class data_aws_alb_target_group_attachment implements Data {
    config: data_aws_alb_target_group_attachment_config
    private _is_data: boolean = true
    private _name: string = "data_aws_alb_target_group_attachment"
    private _id: string;
    constructor(id: string, config: data_aws_alb_target_group_attachment_config) {
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
    
    get ref_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.availability_zone`)
  }
    get ref_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.port`)
  }
    get ref_target_group_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.target_group_arn`)
  }
    get ref_target_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.target_id`)
  }
}

