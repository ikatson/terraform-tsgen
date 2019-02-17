import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_batch_compute_environment__compute_resources {
    bid_percentage?: rnumber
    desired_vcpus?: rnumber
    ec2_key_pair?: rstring
    image_id?: rstring
    instance_role: rstring
    instance_type: rstring[]
    max_vcpus: rnumber
    min_vcpus: rnumber
    security_group_ids: rstring[]
    spot_iam_fleet_role?: rstring
    subnets: rstring[]
    tags?: {[propName: string]: rstring}
    type: rstring
}

export interface aws_batch_compute_environment_config {
    arn?: rstring
    compute_environment_name: rstring
    compute_resources?: _aws_batch_compute_environment__compute_resources[]
    ecc_cluster_arn?: rstring
    ecs_cluster_arn?: rstring
    service_role: rstring
    state?: rstring
    status?: rstring
    status_reason?: rstring
    type: rstring
}

export class aws_batch_compute_environment implements Resource {
    config: aws_batch_compute_environment_config
    private _is_data: boolean = false
    private _name: string = "aws_batch_compute_environment"
    private _id: string;
    constructor(id: string, config: aws_batch_compute_environment_config) {
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
    get ref_compute_environment_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.compute_environment_name`)
    }
    get ref_compute_resources(): Reference<_aws_batch_compute_environment__compute_resources[]> {
        return new Reference(`${this._name}.${this._id}.compute_resources`)
    }
    get ref_ecc_cluster_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ecc_cluster_arn`)
    }
    get ref_ecs_cluster_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ecs_cluster_arn`)
    }
    get ref_service_role(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.service_role`)
    }
    get ref_state(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.state`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_status_reason(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status_reason`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
}

