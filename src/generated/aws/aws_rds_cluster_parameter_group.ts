import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_rds_cluster_parameter_group__parameter {
    apply_method?: rstring
    name: rstring
    value: rstring
}

export interface aws_rds_cluster_parameter_group_config {
    arn?: rstring
    description?: rstring
    family: rstring
    name?: rstring
    name_prefix?: rstring
    parameter?: _aws_rds_cluster_parameter_group__parameter[]
    tags?: {[propName: string]: rstring}
}

export class aws_rds_cluster_parameter_group implements Resource {
    config: aws_rds_cluster_parameter_group_config
    private _is_data: boolean = false
    private _name: string = "aws_rds_cluster_parameter_group"
    private _id: string;
    constructor(id: string, config: aws_rds_cluster_parameter_group_config) {
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
    get ref_family(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.family`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_parameter(): Reference<_aws_rds_cluster_parameter_group__parameter[]> {
        return new Reference(`${this._name}.${this._id}.parameter`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

