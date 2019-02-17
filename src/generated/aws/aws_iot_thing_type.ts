import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_iot_thing_type__properties {
    description?: rstring
    searchable_attributes?: rstring[]
}

export interface aws_iot_thing_type_config {
    arn?: rstring
    deprecated?: rboolean
    name: rstring
    properties?: _aws_iot_thing_type__properties[]
}

export class aws_iot_thing_type implements Resource {
    config: aws_iot_thing_type_config
    private _is_data: boolean = false
    private _name: string = "aws_iot_thing_type"
    private _id: string;
    constructor(id: string, config: aws_iot_thing_type_config) {
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
    get ref_deprecated(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.deprecated`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_properties(): Reference<_aws_iot_thing_type__properties[]> {
        return new Reference(`${this._name}.${this._id}.properties`)
    }
}

