import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_codedeploy_app_config {
    compute_platform?: rstring
    name: rstring
    unique_id?: rstring
}

export class aws_codedeploy_app implements Resource {
    config: aws_codedeploy_app_config
    private _is_data: boolean = false
    private _name: string = "aws_codedeploy_app"
    private _id: string;
    constructor(id: string, config: aws_codedeploy_app_config) {
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
    
    get ref_compute_platform(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.compute_platform`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_unique_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.unique_id`)
    }
}

