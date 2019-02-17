import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_region_config {
    current?: rboolean
    description?: rstring
    endpoint?: rstring
    name?: rstring
}

export class data_aws_region implements Data {
    config: data_aws_region_config
    private _is_data: boolean = true
    private _name: string = "aws_region"
    private _id: string;
    constructor(id: string, config: data_aws_region_config) {
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
    
    get ref_current(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.current`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

