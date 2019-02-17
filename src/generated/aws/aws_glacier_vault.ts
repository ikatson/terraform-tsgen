import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_glacier_vault__notification {
    events: rstring[]
    sns_topic: rstring
}

export interface aws_glacier_vault_config {
    access_policy?: rstring
    arn?: rstring
    location?: rstring
    name: rstring
    notification?: _aws_glacier_vault__notification[]
    tags?: {[propName: string]: rstring}
}

export class aws_glacier_vault implements Resource {
    config: aws_glacier_vault_config
    private _is_data: boolean = false
    private _name: string = "aws_glacier_vault"
    private _id: string;
    constructor(id: string, config: aws_glacier_vault_config) {
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
    
    get ref_access_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.access_policy`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_location(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.location`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_notification(): Reference<_aws_glacier_vault__notification[]> {
        return new Reference(`${this._name}.${this._id}.notification`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

