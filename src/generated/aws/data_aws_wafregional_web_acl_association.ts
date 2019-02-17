import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_wafregional_web_acl_association_config {
    resource_arn: rstring
    web_acl_id: rstring
}

export class data_aws_wafregional_web_acl_association implements Data {
    config: data_aws_wafregional_web_acl_association_config
    private _is_data: boolean = true
    private _name: string = "data_aws_wafregional_web_acl_association"
    private _id: string;
    constructor(id: string, config: data_aws_wafregional_web_acl_association_config) {
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
    
    get ref_resource_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.resource_arn`)
  }
    get ref_web_acl_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.web_acl_id`)
  }
}

