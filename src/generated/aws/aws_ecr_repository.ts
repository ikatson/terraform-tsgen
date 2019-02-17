import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ecr_repository_config {
    arn?: rstring
    name: rstring
    registry_id?: rstring
    repository_url?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_ecr_repository implements Resource {
    config: aws_ecr_repository_config
    private _is_data: boolean = false
    private _name: string = "aws_ecr_repository"
    private _id: string;
    constructor(id: string, config: aws_ecr_repository_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_registry_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.registry_id`)
    }
    get ref_repository_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.repository_url`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

