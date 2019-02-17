import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_vpc_endpoint_service_allowed_principal_config {
    principal_arn: rstring
    vpc_endpoint_service_id: rstring
}

export class aws_vpc_endpoint_service_allowed_principal implements Resource {
    config: aws_vpc_endpoint_service_allowed_principal_config
    private _is_data: boolean = false
    private _name: string = "aws_vpc_endpoint_service_allowed_principal"
    private _id: string;
    constructor(id: string, config: aws_vpc_endpoint_service_allowed_principal_config) {
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
    
    get ref_principal_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.principal_arn`)
    }
    get ref_vpc_endpoint_service_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_endpoint_service_id`)
    }
}

