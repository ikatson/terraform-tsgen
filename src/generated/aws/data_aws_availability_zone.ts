import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_availability_zone_config {
    name?: rstring
    name_suffix?: rstring
    region?: rstring
    state?: rstring
    zone_id?: rstring
}

export class data_aws_availability_zone implements Data {
    config: data_aws_availability_zone_config
    private _is_data: boolean = true
    private _name: string = "aws_availability_zone"
    private _id: string;
    constructor(id: string, config: data_aws_availability_zone_config) {
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
    
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_suffix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_suffix`)
  }
    get ref_region(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.region`)
  }
    get ref_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.state`)
  }
    get ref_zone_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.zone_id`)
  }
}

