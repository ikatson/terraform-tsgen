import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_network_interfaces__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_network_interfaces_config {
    filter?: _data_aws_network_interfaces__filter[]
    ids?: rstring[]
    tags?: {[propName: string]: rstring}
}

export class data_aws_network_interfaces implements Data {
    config: data_aws_network_interfaces_config
    private _is_data: boolean = true
    private _name: string = "aws_network_interfaces"
    private _id: string;
    constructor(id: string, config: data_aws_network_interfaces_config) {
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
    
    get ref_filter(): Reference<_data_aws_network_interfaces__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ids`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

