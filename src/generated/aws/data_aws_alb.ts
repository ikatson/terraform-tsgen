import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_alb__access_logs {
    bucket?: rstring
    enabled?: rboolean
    prefix?: rstring
}

export interface _data_aws_alb__subnet_mapping {
    allocation_id?: rstring
    subnet_id: rstring
}

export interface data_aws_alb_config {
    access_logs?: _data_aws_alb__access_logs[]
    arn?: rstring
    arn_suffix?: rstring
    dns_name?: rstring
    enable_deletion_protection?: rboolean
    idle_timeout?: rnumber
    internal?: rboolean
    load_balancer_type?: rstring
    name?: rstring
    security_groups?: rstring[]
    subnet_mapping?: _data_aws_alb__subnet_mapping[]
    subnets?: rstring[]
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
    zone_id?: rstring
}

export class data_aws_alb implements Data {
    config: data_aws_alb_config
    private _is_data: boolean = true
    private _name: string = "aws_alb"
    private _id: string;
    constructor(id: string, config: data_aws_alb_config) {
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
    
    get ref_access_logs(): Reference<_data_aws_alb__access_logs[]> {
        return new Reference(`data.${this._name}.${this._id}.access_logs`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_arn_suffix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn_suffix`)
  }
    get ref_dns_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.dns_name`)
  }
    get ref_enable_deletion_protection(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enable_deletion_protection`)
  }
    get ref_idle_timeout(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.idle_timeout`)
  }
    get ref_internal(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.internal`)
  }
    get ref_load_balancer_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.load_balancer_type`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_subnet_mapping(): Reference<_data_aws_alb__subnet_mapping[]> {
        return new Reference(`data.${this._name}.${this._id}.subnet_mapping`)
  }
    get ref_subnets(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.subnets`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
    get ref_zone_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.zone_id`)
  }
}

