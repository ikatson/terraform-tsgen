import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_elasticsearch_domain_policy_config {
    access_policies: rstring
    domain_name: rstring
}

export class aws_elasticsearch_domain_policy implements Resource {
    config: aws_elasticsearch_domain_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_elasticsearch_domain_policy"
    private _id: string;
    constructor(id: string, config: aws_elasticsearch_domain_policy_config) {
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
        return new Reference(`${this._name}.${this._id}.access_policies`)
    }
    get ref_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain_name`)
    }
}

