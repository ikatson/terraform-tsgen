import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_elasticsearch_domain_policy_config {
    access_policies: rstring
    domain_name: rstring
}

export class data_aws_elasticsearch_domain_policy implements Data {
    config: data_aws_elasticsearch_domain_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_elasticsearch_domain_policy"
    private _id: string;
    constructor(id: string, config: data_aws_elasticsearch_domain_policy_config) {
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
    
    get ref_access_policies(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.access_policies`)
  }
    get ref_domain_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.domain_name`)
  }
}

