import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_glue_connection__physical_connection_requirements {
    availability_zone?: rstring
    security_group_id_list?: rstring[]
    subnet_id?: rstring
}

export interface aws_glue_connection_config {
    catalog_id?: rstring
    connection_properties: {[propName: string]: rstring}
    connection_type?: rstring
    description?: rstring
    match_criteria?: rstring[]
    name: rstring
    physical_connection_requirements?: _aws_glue_connection__physical_connection_requirements[]
}

export class aws_glue_connection implements Resource {
    config: aws_glue_connection_config
    private _is_data: boolean = false
    private _name: string = "aws_glue_connection"
    private _id: string;
    constructor(id: string, config: aws_glue_connection_config) {
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
    get ref_connection_properties(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.connection_properties`)
    }
    get ref_connection_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.connection_type`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_match_criteria(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.match_criteria`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_physical_connection_requirements(): Reference<_aws_glue_connection__physical_connection_requirements[]> {
        return new Reference(`${this._name}.${this._id}.physical_connection_requirements`)
    }
}

