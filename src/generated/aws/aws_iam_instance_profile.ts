import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iam_instance_profile_config {
    arn?: rstring
    create_date?: rstring
    name?: rstring
    name_prefix?: rstring
    path?: rstring
    role?: rstring
    roles?: rstring[]
    unique_id?: rstring
}

export class aws_iam_instance_profile implements Resource {
    config: aws_iam_instance_profile_config
    private _is_data: boolean = false
    private _name: string = "aws_iam_instance_profile"
    private _id: string;
    constructor(id: string, config: aws_iam_instance_profile_config) {
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
    get ref_create_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.create_date`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_path(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.path`)
    }
    get ref_role(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role`)
    }
    get ref_roles(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.roles`)
    }
    get ref_unique_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.unique_id`)
    }
}

