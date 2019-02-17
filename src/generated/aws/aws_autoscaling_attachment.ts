import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_autoscaling_attachment_config {
    alb_target_group_arn?: rstring
    autoscaling_group_name: rstring
    elb?: rstring
}

export class aws_autoscaling_attachment implements Resource {
    config: aws_autoscaling_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_autoscaling_attachment"
    private _id: string;
    constructor(id: string, config: aws_autoscaling_attachment_config) {
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
    
    get ref_alb_target_group_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.alb_target_group_arn`)
    }
    get ref_autoscaling_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.autoscaling_group_name`)
    }
    get ref_elb(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.elb`)
    }
}

