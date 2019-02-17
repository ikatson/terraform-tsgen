import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_alb_target_group__health_check {
    healthy_threshold?: rnumber
    interval?: rnumber
    matcher?: rstring
    path?: rstring
    port?: rstring
    protocol?: rstring
    timeout?: rnumber
    unhealthy_threshold?: rnumber
}

export interface _data_aws_alb_target_group__stickiness {
    cookie_duration?: rnumber
    enabled?: rboolean
    type?: rstring
}

export interface data_aws_alb_target_group_config {
    arn?: rstring
    arn_suffix?: rstring
    deregistration_delay?: rnumber
    health_check?: _data_aws_alb_target_group__health_check[]
    name?: rstring
    port?: rnumber
    protocol?: rstring
    slow_start?: rnumber
    stickiness?: _data_aws_alb_target_group__stickiness[]
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class data_aws_alb_target_group implements Data {
    config: data_aws_alb_target_group_config
    private _is_data: boolean = true
    private _name: string = "aws_alb_target_group"
    private _id: string;
    constructor(id: string, config: data_aws_alb_target_group_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_arn_suffix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn_suffix`)
  }
    get ref_deregistration_delay(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.deregistration_delay`)
  }
    get ref_health_check(): Reference<_data_aws_alb_target_group__health_check[]> {
        return new Reference(`data.${this._name}.${this._id}.health_check`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.port`)
  }
    get ref_protocol(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.protocol`)
  }
    get ref_slow_start(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.slow_start`)
  }
    get ref_stickiness(): Reference<_data_aws_alb_target_group__stickiness[]> {
        return new Reference(`data.${this._name}.${this._id}.stickiness`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

