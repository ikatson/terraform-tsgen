import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_dx_lag_config {
    arn?: rstring
    connections_bandwidth: rstring
    force_destroy?: rboolean
    location: rstring
    name: rstring
    number_of_connections?: rnumber
    tags?: {[propName: string]: rstring}
}

export class aws_dx_lag implements Resource {
    config: aws_dx_lag_config
    private _is_data: boolean = false
    private _name: string = "aws_dx_lag"
    private _id: string;
    constructor(id: string, config: aws_dx_lag_config) {
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
    get ref_connections_bandwidth(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.connections_bandwidth`)
    }
    get ref_force_destroy(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.force_destroy`)
    }
    get ref_location(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.location`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_number_of_connections(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.number_of_connections`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

