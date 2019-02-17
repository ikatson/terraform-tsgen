import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_placement_group_config {
    name: rstring
    strategy: rstring
}

export class aws_placement_group implements Resource {
    config: aws_placement_group_config
    private _is_data: boolean = false
    private _name: string = "aws_placement_group"
    private _id: string;
    constructor(id: string, config: aws_placement_group_config) {
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
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_strategy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.strategy`)
    }
}

