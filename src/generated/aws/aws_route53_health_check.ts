import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_route53_health_check_config {
    child_health_threshold?: rnumber
    child_healthchecks?: rstring[]
    cloudwatch_alarm_name?: rstring
    cloudwatch_alarm_region?: rstring
    enable_sni?: rboolean
    failure_threshold?: rnumber
    fqdn?: rstring
    insufficient_data_health_status?: rstring
    invert_healthcheck?: rboolean
    ip_address?: rstring
    measure_latency?: rboolean
    port?: rnumber
    reference_name?: rstring
    regions?: rstring[]
    request_interval?: rnumber
    resource_path?: rstring
    search_string?: rstring
    tags?: {[propName: string]: rstring}
    type: rstring
}

export class aws_route53_health_check implements Resource {
    config: aws_route53_health_check_config
    private _is_data: boolean = false
    private _name: string = "aws_route53_health_check"
    private _id: string;
    constructor(id: string, config: aws_route53_health_check_config) {
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
    
    get ref_child_health_threshold(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.child_health_threshold`)
    }
    get ref_child_healthchecks(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.child_healthchecks`)
    }
    get ref_cloudwatch_alarm_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cloudwatch_alarm_name`)
    }
    get ref_cloudwatch_alarm_region(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cloudwatch_alarm_region`)
    }
    get ref_enable_sni(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_sni`)
    }
    get ref_failure_threshold(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.failure_threshold`)
    }
    get ref_fqdn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.fqdn`)
    }
    get ref_insufficient_data_health_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.insufficient_data_health_status`)
    }
    get ref_invert_healthcheck(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.invert_healthcheck`)
    }
    get ref_ip_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ip_address`)
    }
    get ref_measure_latency(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.measure_latency`)
    }
    get ref_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.port`)
    }
    get ref_reference_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.reference_name`)
    }
    get ref_regions(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.regions`)
    }
    get ref_request_interval(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.request_interval`)
    }
    get ref_resource_path(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_path`)
    }
    get ref_search_string(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.search_string`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
}

