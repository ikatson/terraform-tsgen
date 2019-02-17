import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_gamelift_fleet__ec2_inbound_permission {
    from_port: rnumber
    ip_range: rstring
    protocol: rstring
    to_port: rnumber
}

export interface _aws_gamelift_fleet__resource_creation_limit_policy {
    new_game_sessions_per_creator?: rnumber
    policy_period_in_minutes?: rnumber
}

export interface __aws_gamelift_fleet__runtime_configuration__server_process {
    concurrent_executions: rnumber
    launch_path: rstring
    parameters?: rstring
}

export interface _aws_gamelift_fleet__runtime_configuration {
    game_session_activation_timeout_seconds?: rnumber
    max_concurrent_game_session_activations?: rnumber
    server_process?: __aws_gamelift_fleet__runtime_configuration__server_process[]
}

export interface aws_gamelift_fleet_config {
    arn?: rstring
    build_id: rstring
    description?: rstring
    ec2_inbound_permission?: _aws_gamelift_fleet__ec2_inbound_permission[]
    ec2_instance_type: rstring
    log_paths?: rstring[]
    metric_groups?: rstring[]
    name: rstring
    new_game_session_protection_policy?: rstring
    operating_system?: rstring
    resource_creation_limit_policy?: _aws_gamelift_fleet__resource_creation_limit_policy[]
    runtime_configuration?: _aws_gamelift_fleet__runtime_configuration[]
}

export class aws_gamelift_fleet implements Resource {
    config: aws_gamelift_fleet_config
    private _is_data: boolean = false
    private _name: string = "aws_gamelift_fleet"
    private _id: string;
    constructor(id: string, config: aws_gamelift_fleet_config) {
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
    get ref_build_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.build_id`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_ec2_inbound_permission(): Reference<_aws_gamelift_fleet__ec2_inbound_permission[]> {
        return new Reference(`${this._name}.${this._id}.ec2_inbound_permission`)
    }
    get ref_ec2_instance_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ec2_instance_type`)
    }
    get ref_log_paths(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.log_paths`)
    }
    get ref_metric_groups(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.metric_groups`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_new_game_session_protection_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.new_game_session_protection_policy`)
    }
    get ref_operating_system(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.operating_system`)
    }
    get ref_resource_creation_limit_policy(): Reference<_aws_gamelift_fleet__resource_creation_limit_policy[]> {
        return new Reference(`${this._name}.${this._id}.resource_creation_limit_policy`)
    }
    get ref_runtime_configuration(): Reference<_aws_gamelift_fleet__runtime_configuration[]> {
        return new Reference(`${this._name}.${this._id}.runtime_configuration`)
    }
}

