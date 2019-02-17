import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_dx_connection_config {
    arn?: rstring
    bandwidth: rstring
    jumbo_frame_capable?: rboolean
    location: rstring
    name: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_dx_connection implements Resource {
    config: aws_dx_connection_config
    private _is_data: boolean = false
    private _name: string = "aws_dx_connection"
    private _id: string;
    constructor(id: string, config: aws_dx_connection_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_bandwidth(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.bandwidth`)
    }
    get ref_jumbo_frame_capable(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.jumbo_frame_capable`)
    }
    get ref_location(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.location`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

