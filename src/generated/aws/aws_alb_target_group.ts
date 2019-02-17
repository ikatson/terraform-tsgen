import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_alb_target_group__health_check {
    healthy_threshold?: rnumber
    interval?: rnumber
    matcher?: rstring
    path?: rstring
    port?: rstring
    protocol?: rstring
    timeout?: rnumber
    unhealthy_threshold?: rnumber
}

export interface _aws_alb_target_group__stickiness {
    cookie_duration?: rnumber
    enabled?: rboolean
    type: rstring
}

export interface aws_alb_target_group_config {
    arn?: rstring
    arn_suffix?: rstring
    deregistration_delay?: rnumber
    health_check?: _aws_alb_target_group__health_check[]
    name?: rstring
    name_prefix?: rstring
    port?: rnumber
    protocol?: rstring
    proxy_protocol_v2?: rboolean
    slow_start?: rnumber
    stickiness?: _aws_alb_target_group__stickiness[]
    tags?: {[propName: string]: rstring}
    target_type?: rstring
    vpc_id?: rstring
}

export class aws_alb_target_group implements Resource {
    config: aws_alb_target_group_config
    private _is_data: boolean = false
    private _name: string = "aws_alb_target_group"
    private _id: string;
    constructor(id: string, config: aws_alb_target_group_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_arn_suffix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn_suffix`)
    }
    get ref_deregistration_delay(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.deregistration_delay`)
    }
    get ref_health_check(): Reference<_aws_alb_target_group__health_check[]> {
        return new Reference(`${this._name}.${this._id}.health_check`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.port`)
    }
    get ref_protocol(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.protocol`)
    }
    get ref_proxy_protocol_v2(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.proxy_protocol_v2`)
    }
    get ref_slow_start(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.slow_start`)
    }
    get ref_stickiness(): Reference<_aws_alb_target_group__stickiness[]> {
        return new Reference(`${this._name}.${this._id}.stickiness`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_target_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.target_type`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

