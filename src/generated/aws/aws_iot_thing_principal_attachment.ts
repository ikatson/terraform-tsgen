import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iot_thing_principal_attachment_config {
    principal: rstring
    thing: rstring
}

export class aws_iot_thing_principal_attachment implements Resource {
    config: aws_iot_thing_principal_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_iot_thing_principal_attachment"
    private _id: string;
    constructor(id: string, config: aws_iot_thing_principal_attachment_config) {
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
    
    get ref_principal(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.principal`)
    }
    get ref_thing(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.thing`)
    }
}

