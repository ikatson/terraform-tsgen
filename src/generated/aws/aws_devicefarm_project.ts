import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_devicefarm_project_config {
    arn?: rstring
    name: rstring
}

export class aws_devicefarm_project implements Resource {
    config: aws_devicefarm_project_config
    private _is_data: boolean = false
    private _name: string = "aws_devicefarm_project"
    private _id: string;
    constructor(id: string, config: aws_devicefarm_project_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

