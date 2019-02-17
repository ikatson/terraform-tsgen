import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_licensemanager_association_config {
    license_configuration_arn: rstring
    resource_arn: rstring
}

export class aws_licensemanager_association implements Resource {
    config: aws_licensemanager_association_config
    private _is_data: boolean = false
    private _name: string = "aws_licensemanager_association"
    private _id: string;
    constructor(id: string, config: aws_licensemanager_association_config) {
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
    
    get ref_license_configuration_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.license_configuration_arn`)
    }
    get ref_resource_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.resource_arn`)
    }
}

