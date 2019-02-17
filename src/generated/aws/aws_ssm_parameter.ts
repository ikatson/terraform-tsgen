import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ssm_parameter_config {
    allowed_pattern?: rstring
    arn?: rstring
    description?: rstring
    key_id?: rstring
    name: rstring
    overwrite?: rboolean
    tags?: {[propName: string]: rstring}
    type: rstring
    value: rstring
}

export class aws_ssm_parameter implements Resource {
    config: aws_ssm_parameter_config
    private _is_data: boolean = false
    private _name: string = "aws_ssm_parameter"
    private _id: string;
    constructor(id: string, config: aws_ssm_parameter_config) {
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
    
    get ref_allowed_pattern(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.allowed_pattern`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_id`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_overwrite(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.overwrite`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
    get ref_value(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.value`)
    }
}

