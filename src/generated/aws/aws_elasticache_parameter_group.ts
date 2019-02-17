import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_elasticache_parameter_group__parameter {
    name: rstring
    value: rstring
}

export interface aws_elasticache_parameter_group_config {
    description?: rstring
    family: rstring
    name: rstring
    parameter?: _aws_elasticache_parameter_group__parameter[]
}

export class aws_elasticache_parameter_group implements Resource {
    config: aws_elasticache_parameter_group_config
    private _is_data: boolean = false
    private _name: string = "aws_elasticache_parameter_group"
    private _id: string;
    constructor(id: string, config: aws_elasticache_parameter_group_config) {
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
    
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_family(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.family`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_parameter(): Reference<_aws_elasticache_parameter_group__parameter[]> {
        return new Reference(`${this._name}.${this._id}.parameter`)
    }
}

