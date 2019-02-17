import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_emr_instance_group__ebs_config {
    iops?: rnumber
    size: rnumber
    type: rstring
    volumes_per_instance?: rnumber
}

export interface aws_emr_instance_group_config {
    cluster_id: rstring
    ebs_config?: _aws_emr_instance_group__ebs_config[]
    ebs_optimized?: rboolean
    instance_count?: rnumber
    instance_type: rstring
    name?: rstring
    running_instance_count?: rnumber
    status?: rstring
}

export class aws_emr_instance_group implements Resource {
    config: aws_emr_instance_group_config
    private _is_data: boolean = false
    private _name: string = "aws_emr_instance_group"
    private _id: string;
    constructor(id: string, config: aws_emr_instance_group_config) {
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
    
    get ref_cluster_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_id`)
    }
    get ref_ebs_config(): Reference<_aws_emr_instance_group__ebs_config[]> {
        return new Reference(`${this._name}.${this._id}.ebs_config`)
    }
    get ref_ebs_optimized(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.ebs_optimized`)
    }
    get ref_instance_count(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.instance_count`)
    }
    get ref_instance_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_type`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_running_instance_count(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.running_instance_count`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
}

