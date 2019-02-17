import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iot_role_alias_config {
    alias: rstring
    credential_duration?: rnumber
    role_arn: rstring
}

export class aws_iot_role_alias implements Resource {
    config: aws_iot_role_alias_config
    private _is_data: boolean = false
    private _name: string = "aws_iot_role_alias"
    private _id: string;
    constructor(id: string, config: aws_iot_role_alias_config) {
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
    
    get ref_alias(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.alias`)
    }
    get ref_credential_duration(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.credential_duration`)
    }
    get ref_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role_arn`)
    }
}

