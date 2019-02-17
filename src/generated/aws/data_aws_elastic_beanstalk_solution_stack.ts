import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_elastic_beanstalk_solution_stack_config {
    most_recent?: rboolean
    name?: rstring
    name_regex: rstring
}

export class data_aws_elastic_beanstalk_solution_stack implements Data {
    config: data_aws_elastic_beanstalk_solution_stack_config
    private _is_data: boolean = true
    private _name: string = "aws_elastic_beanstalk_solution_stack"
    private _id: string;
    constructor(id: string, config: data_aws_elastic_beanstalk_solution_stack_config) {
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
    
    get ref_most_recent(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.most_recent`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_regex(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_regex`)
  }
}

