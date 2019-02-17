import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_dx_connection_config {
    arn?: rstring
    bandwidth: rstring
    jumbo_frame_capable?: rboolean
    location: rstring
    name: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_dx_connection implements Data {
    config: data_aws_dx_connection_config
    private _is_data: boolean = true
    private _name: string = "data_aws_dx_connection"
    private _id: string;
    constructor(id: string, config: data_aws_dx_connection_config) {
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
    get ref_bandwidth(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.bandwidth`)
  }
    get ref_jumbo_frame_capable(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.jumbo_frame_capable`)
  }
    get ref_location(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.location`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

