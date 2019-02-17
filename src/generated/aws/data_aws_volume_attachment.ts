import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_volume_attachment_config {
    device_name: rstring
    force_detach?: rboolean
    instance_id: rstring
    skip_destroy?: rboolean
    volume_id: rstring
}

export class data_aws_volume_attachment implements Data {
    config: data_aws_volume_attachment_config
    private _is_data: boolean = true
    private _name: string = "data_aws_volume_attachment"
    private _id: string;
    constructor(id: string, config: data_aws_volume_attachment_config) {
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
        return new Reference(`data.${this._name}.${this._id}.device_name`)
  }
    get ref_force_detach(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.force_detach`)
  }
    get ref_instance_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_id`)
  }
    get ref_skip_destroy(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.skip_destroy`)
  }
    get ref_volume_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.volume_id`)
  }
}

