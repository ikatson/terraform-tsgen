import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ram_principal_association_config {
    principal: rstring
    resource_share_arn: rstring
}

export class aws_ram_principal_association implements Resource {
    config: aws_ram_principal_association_config
    private _is_data: boolean = false
    private _name: string = "aws_ram_principal_association"
    private _id: string;
    constructor(id: string, config: aws_ram_principal_association_config) {
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
    
    get ref_principal(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.principal`)
    }
    get ref_resource_share_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_share_arn`)
    }
}

