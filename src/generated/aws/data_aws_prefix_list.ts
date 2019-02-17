import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_prefix_list_config {
    cidr_blocks?: rstring[]
    name?: rstring
    prefix_list_id?: rstring
}

export class data_aws_prefix_list implements Data {
    config: data_aws_prefix_list_config
    private _is_data: boolean = true
    private _name: string = "aws_prefix_list"
    private _id: string;
    constructor(id: string, config: data_aws_prefix_list_config) {
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
    
    get ref_cidr_blocks(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.cidr_blocks`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_prefix_list_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.prefix_list_id`)
  }
}

