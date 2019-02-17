import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_inspector_resource_group_config {
    arn?: rstring
    tags: {[propName: string]: rstring}
}

export class aws_inspector_resource_group implements Resource {
    config: aws_inspector_resource_group_config
    private _is_data: boolean = false
    private _name: string = "aws_inspector_resource_group"
    private _id: string;
    constructor(id: string, config: aws_inspector_resource_group_config) {
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
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

