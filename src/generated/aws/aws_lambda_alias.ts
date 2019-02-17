import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_lambda_alias__routing_config {
    additional_version_weights?: {[propName: string]: rstring}
}

export interface aws_lambda_alias_config {
    arn?: rstring
    description?: rstring
    function_name: rstring
    function_version: rstring
    invoke_arn?: rstring
    name: rstring
    routing_config?: _aws_lambda_alias__routing_config[]
}

export class aws_lambda_alias implements Resource {
    config: aws_lambda_alias_config
    private _is_data: boolean = false
    private _name: string = "aws_lambda_alias"
    private _id: string;
    constructor(id: string, config: aws_lambda_alias_config) {
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
    get ref_function_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.function_name`)
    }
    get ref_function_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.function_version`)
    }
    get ref_invoke_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.invoke_arn`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_routing_config(): Reference<_aws_lambda_alias__routing_config[]> {
        return new Reference(`${this._name}.${this._id}.routing_config`)
    }
}

