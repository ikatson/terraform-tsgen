import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cur_report_definition_config {
    additional_artifacts?: rstring[]
    additional_schema_elements: rstring[]
    compression: rstring
    format: rstring
    report_name: rstring
    s3_bucket: rstring
    s3_prefix?: rstring
    s3_region: rstring
    time_unit: rstring
}

export class aws_cur_report_definition implements Resource {
    config: aws_cur_report_definition_config
    private _is_data: boolean = false
    private _name: string = "aws_cur_report_definition"
    private _id: string;
    constructor(id: string, config: aws_cur_report_definition_config) {
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
    
    get ref_additional_artifacts(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.additional_artifacts`)
    }
    get ref_additional_schema_elements(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.additional_schema_elements`)
    }
    get ref_compression(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.compression`)
    }
    get ref_format(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.format`)
    }
    get ref_report_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.report_name`)
    }
    get ref_s3_bucket(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_bucket`)
    }
    get ref_s3_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_prefix`)
    }
    get ref_s3_region(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.s3_region`)
    }
    get ref_time_unit(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.time_unit`)
    }
}

