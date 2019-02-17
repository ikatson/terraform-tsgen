import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_media_store_container_policy_config {
    container_name: rstring
    policy: rstring
}

export class aws_media_store_container_policy implements Resource {
    config: aws_media_store_container_policy_config
    private _is_data: boolean = false
    private _name: string = "aws_media_store_container_policy"
    private _id: string;
    constructor(id: string, config: aws_media_store_container_policy_config) {
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
    
    get ref_container_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.container_name`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
}

