import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_lb__access_logs {
    bucket: rstring
    enabled?: rboolean
    prefix?: rstring
}

export interface _aws_lb__subnet_mapping {
    allocation_id?: rstring
    subnet_id: rstring
}

export interface aws_lb_config {
    access_logs?: _aws_lb__access_logs[]
    arn?: rstring
    arn_suffix?: rstring
    dns_name?: rstring
    enable_cross_zone_load_balancing?: rboolean
    enable_deletion_protection?: rboolean
    enable_http2?: rboolean
    idle_timeout?: rnumber
    internal?: rboolean
    ip_address_type?: rstring
    load_balancer_type?: rstring
    name?: rstring
    name_prefix?: rstring
    security_groups?: rstring[]
    subnet_mapping?: _aws_lb__subnet_mapping[]
    subnets?: rstring[]
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
    zone_id?: rstring
}

export class aws_lb implements Resource {
    config: aws_lb_config
    private _is_data: boolean = false
    private _name: string = "aws_lb"
    private _id: string;
    constructor(id: string, config: aws_lb_config) {
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
    
    get ref_access_logs(): Reference<_aws_lb__access_logs[]> {
        return new Reference(`${this._name}.${this._id}.access_logs`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_arn_suffix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn_suffix`)
    }
    get ref_dns_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dns_name`)
    }
    get ref_enable_cross_zone_load_balancing(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_cross_zone_load_balancing`)
    }
    get ref_enable_deletion_protection(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_deletion_protection`)
    }
    get ref_enable_http2(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_http2`)
    }
    get ref_idle_timeout(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.idle_timeout`)
    }
    get ref_internal(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.internal`)
    }
    get ref_ip_address_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ip_address_type`)
    }
    get ref_load_balancer_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.load_balancer_type`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.security_groups`)
    }
    get ref_subnet_mapping(): Reference<_aws_lb__subnet_mapping[]> {
        return new Reference(`${this._name}.${this._id}.subnet_mapping`)
    }
    get ref_subnets(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.subnets`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
    get ref_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.zone_id`)
    }
}

