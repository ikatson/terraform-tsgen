import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_gamelift_alias__routing_strategy {
    fleet_id?: rstring
    message?: rstring
    type: rstring
}

export interface data_aws_gamelift_alias_config {
    arn?: rstring
    description?: rstring
    name: rstring
    routing_strategy: _data_aws_gamelift_alias__routing_strategy[]
}

export class data_aws_gamelift_alias implements Data {
    config: data_aws_gamelift_alias_config
    private _is_data: boolean = true
    private _name: string = "data_aws_gamelift_alias"
    private _id: string;
    constructor(id: string, config: data_aws_gamelift_alias_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_routing_strategy(): Reference<_data_aws_gamelift_alias__routing_strategy[]> {
        return new Reference(`data.${this._name}.${this._id}.routing_strategy`)
  }
}

