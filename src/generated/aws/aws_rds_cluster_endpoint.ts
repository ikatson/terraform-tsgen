import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_rds_cluster_endpoint_config {
    arn?: rstring
    cluster_endpoint_identifier: rstring
    cluster_identifier: rstring
    custom_endpoint_type: rstring
    endpoint?: rstring
    excluded_members?: rstring[]
    static_members?: rstring[]
}

export class aws_rds_cluster_endpoint implements Resource {
    config: aws_rds_cluster_endpoint_config
    private _is_data: boolean = false
    private _name: string = "aws_rds_cluster_endpoint"
    private _id: string;
    constructor(id: string, config: aws_rds_cluster_endpoint_config) {
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
    get ref_cluster_endpoint_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_endpoint_identifier`)
    }
    get ref_cluster_identifier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_identifier`)
    }
    get ref_custom_endpoint_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.custom_endpoint_type`)
    }
    get ref_endpoint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.endpoint`)
    }
    get ref_excluded_members(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.excluded_members`)
    }
    get ref_static_members(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.static_members`)
    }
}

