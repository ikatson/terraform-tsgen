import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_api_gateway_base_path_mapping_config {
    api_id: rstring
    base_path?: rstring
    domain_name: rstring
    stage_name?: rstring
}

export class aws_api_gateway_base_path_mapping implements Resource {
    config: aws_api_gateway_base_path_mapping_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_base_path_mapping"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_base_path_mapping_config) {
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
    
    get ref_api_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.api_id`)
    }
    get ref_base_path(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.base_path`)
    }
    get ref_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain_name`)
    }
    get ref_stage_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.stage_name`)
    }
}

