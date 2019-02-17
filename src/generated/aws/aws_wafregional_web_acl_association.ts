import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_wafregional_web_acl_association_config {
    resource_arn: rstring
    web_acl_id: rstring
}

export class aws_wafregional_web_acl_association implements Resource {
    config: aws_wafregional_web_acl_association_config
    private _is_data: boolean = false
    private _name: string = "aws_wafregional_web_acl_association"
    private _id: string;
    constructor(id: string, config: aws_wafregional_web_acl_association_config) {
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
        return new Reference(`${this._name}.${this._id}.resource_arn`)
    }
    get ref_web_acl_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.web_acl_id`)
    }
}

