import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_api_gateway_stage__access_log_settings {
    destination_arn: rstring
    format: rstring
}

export interface aws_api_gateway_stage_config {
    access_log_settings?: _aws_api_gateway_stage__access_log_settings[]
    cache_cluster_enabled?: rboolean
    cache_cluster_size?: rstring
    client_certificate_id?: rstring
    deployment_id: rstring
    description?: rstring
    documentation_version?: rstring
    execution_arn?: rstring
    invoke_url?: rstring
    rest_api_id: rstring
    stage_name: rstring
    tags?: {[propName: string]: rstring}
    variables?: {[propName: string]: rstring}
    xray_tracing_enabled?: rboolean
}

export class aws_api_gateway_stage implements Resource {
    config: aws_api_gateway_stage_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_stage"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_stage_config) {
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
    
    get ref_access_log_settings(): Reference<_aws_api_gateway_stage__access_log_settings[]> {
        return new Reference(`${this._name}.${this._id}.access_log_settings`)
    }
    get ref_cache_cluster_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.cache_cluster_enabled`)
    }
    get ref_cache_cluster_size(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cache_cluster_size`)
    }
    get ref_client_certificate_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.client_certificate_id`)
    }
    get ref_deployment_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.deployment_id`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_documentation_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.documentation_version`)
    }
    get ref_execution_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.execution_arn`)
    }
    get ref_invoke_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.invoke_url`)
    }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rest_api_id`)
    }
    get ref_stage_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.stage_name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_variables(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.variables`)
    }
    get ref_xray_tracing_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.xray_tracing_enabled`)
    }
}

