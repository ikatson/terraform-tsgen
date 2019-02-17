import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_transfer_user_config {
    arn?: rstring
    home_directory?: rstring
    policy?: rstring
    role: rstring
    server_id: rstring
    tags?: {[propName: string]: rstring}
    user_name: rstring
}

export class aws_transfer_user implements Resource {
    config: aws_transfer_user_config
    private _is_data: boolean = false
    private _name: string = "aws_transfer_user"
    private _id: string;
    constructor(id: string, config: aws_transfer_user_config) {
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
    get ref_home_directory(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.home_directory`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_role(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.role`)
    }
    get ref_server_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.server_id`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_user_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.user_name`)
    }
}

