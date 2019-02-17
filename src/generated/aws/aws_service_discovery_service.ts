import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_service_discovery_service__dns_config__dns_records {
    ttl: rnumber
    type: rstring
}

export interface _aws_service_discovery_service__dns_config {
    dns_records: __aws_service_discovery_service__dns_config__dns_records[]
    namespace_id: rstring
    routing_policy?: rstring
}

export interface _aws_service_discovery_service__health_check_config {
    failure_threshold?: rnumber
    resource_path?: rstring
    type?: rstring
}

export interface _aws_service_discovery_service__health_check_custom_config {
    failure_threshold?: rnumber
}

export interface aws_service_discovery_service_config {
    arn?: rstring
    description?: rstring
    dns_config: _aws_service_discovery_service__dns_config[]
    health_check_config?: _aws_service_discovery_service__health_check_config[]
    health_check_custom_config?: _aws_service_discovery_service__health_check_custom_config[]
    name: rstring
}

export class aws_service_discovery_service implements Resource {
    config: aws_service_discovery_service_config
    private _is_data: boolean = false
    private _name: string = "aws_service_discovery_service"
    private _id: string;
    constructor(id: string, config: aws_service_discovery_service_config) {
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
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_dns_config(): Reference<_aws_service_discovery_service__dns_config[]> {
        return new Reference(`${this._name}.${this._id}.dns_config`)
    }
    get ref_health_check_config(): Reference<_aws_service_discovery_service__health_check_config[]> {
        return new Reference(`${this._name}.${this._id}.health_check_config`)
    }
    get ref_health_check_custom_config(): Reference<_aws_service_discovery_service__health_check_custom_config[]> {
        return new Reference(`${this._name}.${this._id}.health_check_custom_config`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

