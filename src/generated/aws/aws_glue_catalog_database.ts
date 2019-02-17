import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_glue_catalog_database_config {
    catalog_id?: rstring
    description?: rstring
    location_uri?: rstring
    name: rstring
    parameters?: {[propName: string]: rstring}
}

export class aws_glue_catalog_database implements Resource {
    config: aws_glue_catalog_database_config
    private _is_data: boolean = false
    private _name: string = "aws_glue_catalog_database"
    private _id: string;
    constructor(id: string, config: aws_glue_catalog_database_config) {
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
    
    get ref_catalog_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.catalog_id`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_location_uri(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.location_uri`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.parameters`)
    }
}

