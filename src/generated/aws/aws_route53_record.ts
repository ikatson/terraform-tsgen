import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_route53_record__alias {
    evaluate_target_health: rboolean
    name: rstring
    zone_id: rstring
}

export interface _aws_route53_record__failover_routing_policy {
    type: rstring
}

export interface _aws_route53_record__geolocation_routing_policy {
    continent?: rstring
    country?: rstring
    subdivision?: rstring
}

export interface _aws_route53_record__latency_routing_policy {
    region: rstring
}

export interface _aws_route53_record__weighted_routing_policy {
    weight: rnumber
}

export interface aws_route53_record_config {
    alias?: _aws_route53_record__alias[]
    allow_overwrite?: rboolean
    failover?: rstring
    failover_routing_policy?: _aws_route53_record__failover_routing_policy[]
    fqdn?: rstring
    geolocation_routing_policy?: _aws_route53_record__geolocation_routing_policy[]
    health_check_id?: rstring
    latency_routing_policy?: _aws_route53_record__latency_routing_policy[]
    multivalue_answer_routing_policy?: rboolean
    name: rstring
    records?: rstring[]
    set_identifier?: rstring
    ttl?: rnumber
    type: rstring
    weight?: rnumber
    weighted_routing_policy?: _aws_route53_record__weighted_routing_policy[]
    zone_id: rstring
}

export class aws_route53_record implements Resource {
    config: aws_route53_record_config
    private _is_data: boolean = false
    private _name: string = "aws_route53_record"
    private _id: string;
    constructor(id: string, config: aws_route53_record_config) {
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
    
    get ref_alias(): Reference<_aws_route53_record__alias[]> {
        return new Reference(`${this._name}.${this._id}.alias`)
    }
    get ref_allow_overwrite(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.allow_overwrite`)
    }
    get ref_failover(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.failover`)
    }
    get ref_failover_routing_policy(): Reference<_aws_route53_record__failover_routing_policy[]> {
        return new Reference(`${this._name}.${this._id}.failover_routing_policy`)
    }
    get ref_fqdn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.fqdn`)
    }
    get ref_geolocation_routing_policy(): Reference<_aws_route53_record__geolocation_routing_policy[]> {
        return new Reference(`${this._name}.${this._id}.geolocation_routing_policy`)
    }
    get ref_health_check_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.health_check_id`)
    }
    get ref_latency_routing_policy(): Reference<_aws_route53_record__latency_routing_policy[]> {
        return new Reference(`${this._name}.${this._id}.latency_routing_policy`)
    }
    get ref_multivalue_answer_routing_policy(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.multivalue_answer_routing_policy`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_records(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.records`)
    }
    get ref_set_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.set_identifier`)
    }
    get ref_ttl(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.ttl`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
    get ref_weight(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.weight`)
    }
    get ref_weighted_routing_policy(): Reference<_aws_route53_record__weighted_routing_policy[]> {
        return new Reference(`${this._name}.${this._id}.weighted_routing_policy`)
    }
    get ref_zone_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.zone_id`)
    }
}

