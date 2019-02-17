import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ecr_repository_policy_config {
    policy: rstring
    registry_id?: rstring
    repository: rstring
}

export class data_aws_ecr_repository_policy implements Data {
    config: data_aws_ecr_repository_policy_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ecr_repository_policy"
    private _id: string;
    constructor(id: string, config: data_aws_ecr_repository_policy_config) {
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
    
    get ref_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.policy`)
  }
    get ref_registry_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.registry_id`)
  }
    get ref_repository(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.repository`)
  }
}

