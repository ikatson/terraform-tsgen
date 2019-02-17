import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_elb__access_logs {
    bucket?: rstring
    bucket_prefix?: rstring
    enabled?: rboolean
    interval?: rnumber
}

export interface _data_aws_elb__health_check {
    healthy_threshold?: rnumber
    interval?: rnumber
    target?: rstring
    timeout?: rnumber
    unhealthy_threshold?: rnumber
}

export interface _data_aws_elb__listener {
    instance_port?: rnumber
    instance_protocol?: rstring
    lb_port?: rnumber
    lb_protocol?: rstring
    ssl_certificate_id?: rstring
}

export interface data_aws_elb_config {
    access_logs?: _data_aws_elb__access_logs[]
    availability_zones?: rstring[]
    connection_draining?: rboolean
    connection_draining_timeout?: rnumber
    cross_zone_load_balancing?: rboolean
    dns_name?: rstring
    health_check?: _data_aws_elb__health_check[]
    idle_timeout?: rnumber
    instances?: rstring[]
    internal?: rboolean
    listener?: _data_aws_elb__listener[]
    name: rstring
    security_groups?: rstring[]
    source_security_group?: rstring
    source_security_group_id?: rstring
    subnets?: rstring[]
    tags?: {[propName: string]: rstring}
    zone_id?: rstring
}

export class data_aws_elb implements Data {
    config: data_aws_elb_config
    private _is_data: boolean = true
    private _name: string = "aws_elb"
    private _id: string;
    constructor(id: string, config: data_aws_elb_config) {
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
    
    get ref_access_logs(): Reference<_data_aws_elb__access_logs[]> {
        return new Reference(`data.${this._name}.${this._id}.access_logs`)
  }
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.availability_zones`)
  }
    get ref_connection_draining(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.connection_draining`)
  }
    get ref_connection_draining_timeout(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.connection_draining_timeout`)
  }
    get ref_cross_zone_load_balancing(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.cross_zone_load_balancing`)
  }
    get ref_dns_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.dns_name`)
  }
    get ref_health_check(): Reference<_data_aws_elb__health_check[]> {
        return new Reference(`data.${this._name}.${this._id}.health_check`)
  }
    get ref_idle_timeout(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.idle_timeout`)
  }
    get ref_instances(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.instances`)
  }
    get ref_internal(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.internal`)
  }
    get ref_listener(): Reference<_data_aws_elb__listener[]> {
        return new Reference(`data.${this._name}.${this._id}.listener`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_source_security_group(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_security_group`)
  }
    get ref_source_security_group_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_security_group_id`)
  }
    get ref_subnets(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.subnets`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_zone_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.zone_id`)
  }
}

