import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ram_principal_association_config {
    principal: rstring
    resource_share_arn: rstring
}

export class data_aws_ram_principal_association implements Data {
    config: data_aws_ram_principal_association_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ram_principal_association"
    private _id: string;
    constructor(id: string, config: data_aws_ram_principal_association_config) {
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
        return new Reference(`data.${this._name}.${this._id}.principal`)
  }
    get ref_resource_share_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.resource_share_arn`)
  }
}

