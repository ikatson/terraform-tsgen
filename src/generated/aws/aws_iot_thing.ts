import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iot_thing_config {
    arn?: rstring
    attributes?: {[propName: string]: rstring}
    default_client_id?: rstring
    name: rstring
    thing_type_name?: rstring
    version?: rnumber
}

export class aws_iot_thing implements Resource {
    config: aws_iot_thing_config
    private _is_data: boolean = false
    private _name: string = "aws_iot_thing"
    private _id: string;
    constructor(id: string, config: aws_iot_thing_config) {
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
    get ref_attributes(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.attributes`)
    }
    get ref_default_client_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.default_client_id`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_thing_type_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.thing_type_name`)
    }
    get ref_version(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.version`)
    }
}

