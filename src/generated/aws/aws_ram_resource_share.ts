import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ram_resource_share_config {
    allow_external_principals?: rboolean
    name: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_ram_resource_share implements Resource {
    config: aws_ram_resource_share_config
    private _is_data: boolean = false
    private _name: string = "aws_ram_resource_share"
    private _id: string;
    constructor(id: string, config: aws_ram_resource_share_config) {
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
    
    get ref_allow_external_principals(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.allow_external_principals`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

