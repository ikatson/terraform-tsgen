import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_volume_attachment_config {
    device_name: rstring
    force_detach?: rboolean
    instance_id: rstring
    skip_destroy?: rboolean
    volume_id: rstring
}

export class aws_volume_attachment implements Resource {
    config: aws_volume_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_volume_attachment"
    private _id: string;
    constructor(id: string, config: aws_volume_attachment_config) {
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
    
    get ref_device_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.device_name`)
    }
    get ref_force_detach(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.force_detach`)
    }
    get ref_instance_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_id`)
    }
    get ref_skip_destroy(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.skip_destroy`)
    }
    get ref_volume_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.volume_id`)
    }
}

