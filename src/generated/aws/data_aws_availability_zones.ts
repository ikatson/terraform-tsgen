import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_availability_zones_config {
    names?: rstring[]
    state?: rstring
    zone_ids?: rstring[]
}

export class data_aws_availability_zones implements Data {
    config: data_aws_availability_zones_config
    private _is_data: boolean = true
    private _name: string = "aws_availability_zones"
    private _id: string;
    constructor(id: string, config: data_aws_availability_zones_config) {
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
    
    get ref_names(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.names`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
  }
    get ref_zone_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.zone_ids`)
  }
}

