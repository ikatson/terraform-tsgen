import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_lightsail_static_ip_attachment_config {
    instance_name: rstring
    static_ip_name: rstring
}

export class aws_lightsail_static_ip_attachment implements Resource {
    config: aws_lightsail_static_ip_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_lightsail_static_ip_attachment"
    private _id: string;
    constructor(id: string, config: aws_lightsail_static_ip_attachment_config) {
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
    
    get ref_instance_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_name`)
    }
    get ref_static_ip_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.static_ip_name`)
    }
}

