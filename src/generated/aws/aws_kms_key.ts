import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_kms_key_config {
    arn?: rstring
    deletion_window_in_days?: rnumber
    description?: rstring
    enable_key_rotation?: rboolean
    is_enabled?: rboolean
    key_id?: rstring
    key_usage?: rstring
    policy?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_kms_key implements Resource {
    config: aws_kms_key_config
    private _is_data: boolean = false
    private _name: string = "aws_kms_key"
    private _id: string;
    constructor(id: string, config: aws_kms_key_config) {
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
    get ref_deletion_window_in_days(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.deletion_window_in_days`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_enable_key_rotation(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable_key_rotation`)
    }
    get ref_is_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.is_enabled`)
    }
    get ref_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_id`)
    }
    get ref_key_usage(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key_usage`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

