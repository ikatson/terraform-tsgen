import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ecr_lifecycle_policy_config {
    policy: rstring
    registry_id?: rstring
    repository: rstring
}

export class aws_ecr_lifecycle_policy implements Resource {
    config: aws_ecr_lifecycle_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_ecr_lifecycle_policy"
    private _id: string;
    constructor(id: string, config: aws_ecr_lifecycle_policy_config) {
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
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_registry_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.registry_id`)
    }
    get ref_repository(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.repository`)
    }
}

