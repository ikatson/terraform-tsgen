import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_swf_domain_config {
    description?: rstring
    name?: rstring
    name_prefix?: rstring
    workflow_execution_retention_period_in_days: rstring
}

export class aws_swf_domain implements Resource {
    config: aws_swf_domain_config
    private _is_data: boolean = false
    private _name: string = "aws_swf_domain"
    private _id: string;
    constructor(id: string, config: aws_swf_domain_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_workflow_execution_retention_period_in_days(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.workflow_execution_retention_period_in_days`)
    }
}

