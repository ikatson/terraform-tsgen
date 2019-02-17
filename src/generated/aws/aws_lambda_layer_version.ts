import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_lambda_layer_version_config {
    arn?: rstring
    compatible_runtimes?: rstring[]
    created_date?: rstring
    description?: rstring
    filename?: rstring
    layer_arn?: rstring
    layer_name: rstring
    license_info?: rstring
    s3_bucket?: rstring
    s3_key?: rstring
    s3_object_version?: rstring
    source_code_hash?: rstring
    source_code_size?: rnumber
    version?: rstring
}

export class aws_lambda_layer_version implements Resource {
    config: aws_lambda_layer_version_config
    private _is_data: boolean = false
    private _name: string = "aws_lambda_layer_version"
    private _id: string;
    constructor(id: string, config: aws_lambda_layer_version_config) {
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
    get ref_compatible_runtimes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.compatible_runtimes`)
    }
    get ref_created_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.created_date`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_filename(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.filename`)
    }
    get ref_layer_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.layer_arn`)
    }
    get ref_layer_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.layer_name`)
    }
    get ref_license_info(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.license_info`)
    }
    get ref_s3_bucket(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_bucket`)
    }
    get ref_s3_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_key`)
    }
    get ref_s3_object_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_object_version`)
    }
    get ref_source_code_hash(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_code_hash`)
    }
    get ref_source_code_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.source_code_size`)
    }
    get ref_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.version`)
    }
}

