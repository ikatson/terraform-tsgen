import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_db_event_categories_config {
    event_categories?: rstring[]
    source_type?: rstring
}

export class data_aws_db_event_categories implements Data {
    config: data_aws_db_event_categories_config
    private _is_data: boolean = true
    private _name: string = "aws_db_event_categories"
    private _id: string;
    constructor(id: string, config: data_aws_db_event_categories_config) {
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
    
    get ref_event_categories(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.event_categories`)
  }
    get ref_source_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_type`)
  }
}

