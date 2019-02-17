import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_kms_grant__constraints {
    encryption_context_equals?: {[propName: string]: rstring}
    encryption_context_subset?: {[propName: string]: rstring}
}

export interface aws_kms_grant_config {
    constraints?: _aws_kms_grant__constraints[]
    grant_creation_tokens?: rstring[]
    grant_id?: rstring
    grant_token?: rstring
    grantee_principal: rstring
    key_id: rstring
    name?: rstring
    operations: rstring[]
    retire_on_delete?: rboolean
    retiring_principal?: rstring
}

export class aws_kms_grant implements Resource {
    config: aws_kms_grant_config
    private _is_data: boolean = false
    private _name: string = "aws_kms_grant"
    private _id: string;
    constructor(id: string, config: aws_kms_grant_config) {
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
    
    get ref_constraints(): Reference<_aws_kms_grant__constraints[]> {
        return new Reference(`${this._name}.${this._id}.constraints`)
    }
    get ref_grant_creation_tokens(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.grant_creation_tokens`)
    }
    get ref_grant_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.grant_id`)
    }
    get ref_grant_token(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.grant_token`)
    }
    get ref_grantee_principal(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.grantee_principal`)
    }
    get ref_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_id`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_operations(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.operations`)
    }
    get ref_retire_on_delete(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.retire_on_delete`)
    }
    get ref_retiring_principal(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.retiring_principal`)
    }
}

