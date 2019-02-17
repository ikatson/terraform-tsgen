import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_organizations_organization_config {
    arn?: rstring
    aws_service_access_principals?: rstring[]
    feature_set?: rstring
    master_account_arn?: rstring
    master_account_email?: rstring
    master_account_id?: rstring
}

export class aws_organizations_organization implements Resource {
    config: aws_organizations_organization_config
    private _is_data: boolean = false
    private _name: string = "aws_organizations_organization"
    private _id: string;
    constructor(id: string, config: aws_organizations_organization_config) {
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
    get ref_aws_service_access_principals(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.aws_service_access_principals`)
    }
    get ref_feature_set(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.feature_set`)
    }
    get ref_master_account_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.master_account_arn`)
    }
    get ref_master_account_email(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.master_account_email`)
    }
    get ref_master_account_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.master_account_id`)
    }
}

