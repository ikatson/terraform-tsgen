import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_sfn_activity_config {
    creation_date?: rstring
    name: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_sfn_activity implements Data {
    config: data_aws_sfn_activity_config
    private _is_data: boolean = true
    private _name: string = "data_aws_sfn_activity"
    private _id: string;
    constructor(id: string, config: data_aws_sfn_activity_config) {
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
    
    get ref_creation_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.creation_date`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

