import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ecs_cluster_config {
    arn?: rstring
    name: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_ecs_cluster implements Resource {
    config: aws_ecs_cluster_config
    private _is_data: boolean = false
    private _name: string = "aws_ecs_cluster"
    private _id: string;
    constructor(id: string, config: aws_ecs_cluster_config) {
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
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

