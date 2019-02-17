import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_api_gateway_deployment_config {
    created_date?: rstring
    description?: rstring
    execution_arn?: rstring
    invoke_url?: rstring
    rest_api_id: rstring
    stage_description?: rstring
    stage_name: rstring
    variables?: {[propName: string]: rstring}
}

export class aws_api_gateway_deployment implements Resource {
    config: aws_api_gateway_deployment_config
    private _is_data: boolean = false
    private _name: string = "aws_api_gateway_deployment"
    private _id: string;
    constructor(id: string, config: aws_api_gateway_deployment_config) {
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
    
    get ref_created_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.created_date`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_execution_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.execution_arn`)
    }
    get ref_invoke_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.invoke_url`)
    }
    get ref_rest_api_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rest_api_id`)
    }
    get ref_stage_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.stage_description`)
    }
    get ref_stage_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.stage_name`)
    }
    get ref_variables(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.variables`)
    }
}

