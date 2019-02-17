import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_transfer_ssh_key_config {
    body: rstring
    server_id: rstring
    user_name: rstring
}

export class aws_transfer_ssh_key implements Resource {
    config: aws_transfer_ssh_key_config
    private _is_data: boolean = false
    private _name: string = "aws_transfer_ssh_key"
    private _id: string;
    constructor(id: string, config: aws_transfer_ssh_key_config) {
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
    
    get ref_body(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.body`)
    }
    get ref_server_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.server_id`)
    }
    get ref_user_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.user_name`)
    }
}

