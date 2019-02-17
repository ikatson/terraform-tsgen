import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_gamelift_game_session_queue__player_latency_policy {
    maximum_individual_player_latency_milliseconds: rnumber
    policy_duration_seconds?: rnumber
}

export interface aws_gamelift_game_session_queue_config {
    arn?: rstring
    destinations?: rstring[]
    name: rstring
    player_latency_policy?: _aws_gamelift_game_session_queue__player_latency_policy[]
    timeout_in_seconds?: rnumber
}

export class aws_gamelift_game_session_queue implements Resource {
    config: aws_gamelift_game_session_queue_config
    private _is_data: boolean = false
    private _name: string = "aws_gamelift_game_session_queue"
    private _id: string;
    constructor(id: string, config: aws_gamelift_game_session_queue_config) {
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
    get ref_destinations(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.destinations`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_player_latency_policy(): Reference<_aws_gamelift_game_session_queue__player_latency_policy[]> {
        return new Reference(`${this._name}.${this._id}.player_latency_policy`)
    }
    get ref_timeout_in_seconds(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.timeout_in_seconds`)
    }
}

