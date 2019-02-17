import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_organizations_policy_config {
    arn?: rstring
    content: rstring
    description?: rstring
    name: rstring
    type?: rstring
}

export class data_aws_organizations_policy implements Data {
    config: data_aws_organizations_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_organizations_policy"
    private _id: string;
    constructor(id: string, config: data_aws_organizations_policy_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_content(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.content`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

