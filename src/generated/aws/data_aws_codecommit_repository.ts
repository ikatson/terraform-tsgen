import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_codecommit_repository_config {
    arn?: rstring
    clone_url_http?: rstring
    clone_url_ssh?: rstring
    repository_id?: rstring
    repository_name: rstring
}

export class data_aws_codecommit_repository implements Data {
    config: data_aws_codecommit_repository_config
    private _is_data: boolean = true
    private _name: string = "aws_codecommit_repository"
    private _id: string;
    constructor(id: string, config: data_aws_codecommit_repository_config) {
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
    get ref_clone_url_http(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.clone_url_http`)
  }
    get ref_clone_url_ssh(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.clone_url_ssh`)
  }
    get ref_repository_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.repository_id`)
  }
    get ref_repository_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.repository_name`)
  }
}

