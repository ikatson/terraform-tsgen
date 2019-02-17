import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_glue_crawler__dynamodb_target {
    path: rstring
}

export interface _aws_glue_crawler__jdbc_target {
    connection_name: rstring
    exclusions?: rstring[]
    path: rstring
}

export interface _aws_glue_crawler__s3_target {
    exclusions?: rstring[]
    path: rstring
}

export interface _aws_glue_crawler__schema_change_policy {
    delete_behavior?: rstring
    update_behavior?: rstring
}

export interface aws_glue_crawler_config {
    classifiers?: rstring[]
    configuration?: rstring
    database_name: rstring
    description?: rstring
    dynamodb_target?: _aws_glue_crawler__dynamodb_target[]
    jdbc_target?: _aws_glue_crawler__jdbc_target[]
    name: rstring
    role: rstring
    s3_target?: _aws_glue_crawler__s3_target[]
    schedule?: rstring
    schema_change_policy?: _aws_glue_crawler__schema_change_policy[]
    security_configuration?: rstring
    table_prefix?: rstring
}

export class aws_glue_crawler implements Resource {
    config: aws_glue_crawler_config
    private _is_data: boolean = false
    private _name: string = "aws_glue_crawler"
    private _id: string;
    constructor(id: string, config: aws_glue_crawler_config) {
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
    
    get ref_classifiers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.classifiers`)
    }
    get ref_configuration(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.configuration`)
    }
    get ref_database_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.database_name`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_dynamodb_target(): Reference<_aws_glue_crawler__dynamodb_target[]> {
        return new Reference(`${this._name}.${this._id}.dynamodb_target`)
    }
    get ref_jdbc_target(): Reference<_aws_glue_crawler__jdbc_target[]> {
        return new Reference(`${this._name}.${this._id}.jdbc_target`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_role(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role`)
    }
    get ref_s3_target(): Reference<_aws_glue_crawler__s3_target[]> {
        return new Reference(`${this._name}.${this._id}.s3_target`)
    }
    get ref_schedule(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.schedule`)
    }
    get ref_schema_change_policy(): Reference<_aws_glue_crawler__schema_change_policy[]> {
        return new Reference(`${this._name}.${this._id}.schema_change_policy`)
    }
    get ref_security_configuration(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.security_configuration`)
    }
    get ref_table_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.table_prefix`)
    }
}

