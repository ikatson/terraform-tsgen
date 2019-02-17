import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_dx_lag_config {
    arn?: rstring
    connections_bandwidth: rstring
    force_destroy?: rboolean
    location: rstring
    name: rstring
    number_of_connections?: rnumber
    tags?: {[propName: string]: rstring}
}

export class data_aws_dx_lag implements Data {
    config: data_aws_dx_lag_config
    private _is_data: boolean = true
    private _name: string = "data_aws_dx_lag"
    private _id: string;
    constructor(id: string, config: data_aws_dx_lag_config) {
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
    get ref_connections_bandwidth(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.connections_bandwidth`)
  }
    get ref_force_destroy(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.force_destroy`)
  }
    get ref_location(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.location`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_number_of_connections(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.number_of_connections`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

