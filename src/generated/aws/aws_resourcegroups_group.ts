import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_resourcegroups_group__resource_query {
    query: rstring
    type?: rstring
}

export interface aws_resourcegroups_group_config {
    arn?: rstring
    description?: rstring
    name: rstring
    resource_query: _aws_resourcegroups_group__resource_query[]
}

export class aws_resourcegroups_group implements Resource {
    config: aws_resourcegroups_group_config
    private _is_data: boolean = false
    private _name: string = "aws_resourcegroups_group"
    private _id: string;
    constructor(id: string, config: aws_resourcegroups_group_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_resource_query(): Reference<_aws_resourcegroups_group__resource_query[]> {
        return new Reference(`${this._name}.${this._id}.resource_query`)
    }
}

