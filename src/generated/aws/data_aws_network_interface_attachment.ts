import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_network_interface_attachment_config {
    attachment_id?: rstring
    device_index: rnumber
    instance_id: rstring
    network_interface_id: rstring
    status?: rstring
}

export class data_aws_network_interface_attachment implements Data {
    config: data_aws_network_interface_attachment_config
    private _is_data: boolean = true
    private _name: string = "data_aws_network_interface_attachment"
    private _id: string;
    constructor(id: string, config: data_aws_network_interface_attachment_config) {
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
    
    get ref_attachment_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.attachment_id`)
  }
    get ref_device_index(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.device_index`)
  }
    get ref_instance_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_id`)
  }
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_id`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
}

