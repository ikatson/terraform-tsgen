import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ram_resource_share_config {
    allow_external_principals?: rboolean
    name: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_ram_resource_share implements Data {
    config: data_aws_ram_resource_share_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ram_resource_share"
    private _id: string;
    constructor(id: string, config: data_aws_ram_resource_share_config) {
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
        return new Reference(`data.${this._name}.${this._id}.allow_external_principals`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

