import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ssm_association__output_location {
    s3_bucket_name: rstring
    s3_key_prefix?: rstring
}

export interface _aws_ssm_association__targets {
    key: rstring
    values: rstring[]
}

export interface aws_ssm_association_config {
    association_id?: rstring
    association_name?: rstring
    document_version?: rstring
    instance_id?: rstring
    name: rstring
    output_location?: _aws_ssm_association__output_location[]
    parameters?: {[propName: string]: rstring}
    schedule_expression?: rstring
    targets?: _aws_ssm_association__targets[]
}

export class aws_ssm_association implements Resource {
    config: aws_ssm_association_config
    private _is_data: boolean = false
    private _name: string = "aws_ssm_association"
    private _id: string;
    constructor(id: string, config: aws_ssm_association_config) {
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
    
    get ref_association_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.association_id`)
    }
    get ref_association_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.association_name`)
    }
    get ref_document_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.document_version`)
    }
    get ref_instance_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_id`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_output_location(): Reference<_aws_ssm_association__output_location[]> {
        return new Reference(`${this._name}.${this._id}.output_location`)
    }
    get ref_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.parameters`)
    }
    get ref_schedule_expression(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.schedule_expression`)
    }
    get ref_targets(): Reference<_aws_ssm_association__targets[]> {
        return new Reference(`${this._name}.${this._id}.targets`)
    }
}

