import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_secretsmanager_secret_version_config {
    arn?: rstring
    secret_binary?: rstring
    secret_id: rstring
    secret_string?: rstring
    version_id?: rstring
    version_stage?: rstring
    version_stages?: rstring[]
}

export class data_aws_secretsmanager_secret_version implements Data {
    config: data_aws_secretsmanager_secret_version_config
    private _is_data: boolean = true
    private _name: string = "aws_secretsmanager_secret_version"
    private _id: string;
    constructor(id: string, config: data_aws_secretsmanager_secret_version_config) {
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
    get ref_secret_binary(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.secret_binary`)
  }
    get ref_secret_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.secret_id`)
  }
    get ref_secret_string(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.secret_string`)
  }
    get ref_version_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.version_id`)
  }
    get ref_version_stage(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.version_stage`)
  }
    get ref_version_stages(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.version_stages`)
  }
}

