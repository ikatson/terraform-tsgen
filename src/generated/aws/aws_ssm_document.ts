import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ssm_document__parameter {
    default_value?: rstring
    description?: rstring
    name?: rstring
    type?: rstring
}

export interface aws_ssm_document_config {
    arn?: rstring
    content: rstring
    created_date?: rstring
    default_version?: rstring
    description?: rstring
    document_format?: rstring
    document_type: rstring
    hash?: rstring
    hash_type?: rstring
    latest_version?: rstring
    name: rstring
    owner?: rstring
    parameter?: _aws_ssm_document__parameter[]
    permissions?: {[propName: string]: rstring}
    platform_types?: rstring[]
    schema_version?: rstring
    status?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_ssm_document implements Resource {
    config: aws_ssm_document_config
    private _is_data: boolean = false
    private _name: string = "aws_ssm_document"
    private _id: string;
    constructor(id: string, config: aws_ssm_document_config) {
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
    get ref_content(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.content`)
    }
    get ref_created_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.created_date`)
    }
    get ref_default_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_version`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_document_format(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.document_format`)
    }
    get ref_document_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.document_type`)
    }
    get ref_hash(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.hash`)
    }
    get ref_hash_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.hash_type`)
    }
    get ref_latest_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.latest_version`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_owner(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner`)
    }
    get ref_parameter(): Reference<_aws_ssm_document__parameter[]> {
        return new Reference(`${this._name}.${this._id}.parameter`)
    }
    get ref_permissions(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.permissions`)
    }
    get ref_platform_types(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.platform_types`)
    }
    get ref_schema_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.schema_version`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

