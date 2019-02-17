import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_codecommit_repository_config {
    arn?: rstring
    clone_url_http?: rstring
    clone_url_ssh?: rstring
    default_branch?: rstring
    description?: rstring
    repository_id?: rstring
    repository_name: rstring
}

export class aws_codecommit_repository implements Resource {
    config: aws_codecommit_repository_config
    private _is_data: boolean = false
    private _name: string = "aws_codecommit_repository"
    private _id: string;
    constructor(id: string, config: aws_codecommit_repository_config) {
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
    get ref_clone_url_http(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.clone_url_http`)
    }
    get ref_clone_url_ssh(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.clone_url_ssh`)
    }
    get ref_default_branch(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_branch`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_repository_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.repository_id`)
    }
    get ref_repository_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.repository_name`)
    }
}

