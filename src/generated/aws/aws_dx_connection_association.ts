import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_dx_connection_association_config {
    connection_id: rstring
    lag_id: rstring
}

export class aws_dx_connection_association implements Resource {
    config: aws_dx_connection_association_config
    private _is_data: boolean = false
    private _name: string = "aws_dx_connection_association"
    private _id: string;
    constructor(id: string, config: aws_dx_connection_association_config) {
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
    
    get ref_connection_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.connection_id`)
    }
    get ref_lag_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.lag_id`)
    }
}

