import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_secretsmanager_secret_version_config {
    arn?: rstring
    secret_binary?: rstring
    secret_id: rstring
    secret_string?: rstring
    version_id?: rstring
    version_stages?: rstring[]
}

export class aws_secretsmanager_secret_version implements Resource {
    config: aws_secretsmanager_secret_version_config
    private _is_data: boolean = false
    private _name: string = "aws_secretsmanager_secret_version"
    private _id: string;
    constructor(id: string, config: aws_secretsmanager_secret_version_config) {
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
    get ref_secret_binary(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.secret_binary`)
    }
    get ref_secret_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.secret_id`)
    }
    get ref_secret_string(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.secret_string`)
    }
    get ref_version_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.version_id`)
    }
    get ref_version_stages(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.version_stages`)
    }
}

