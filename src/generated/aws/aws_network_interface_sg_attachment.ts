import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_network_interface_sg_attachment_config {
    network_interface_id: rstring
    security_group_id: rstring
}

export class aws_network_interface_sg_attachment implements Resource {
    config: aws_network_interface_sg_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_network_interface_sg_attachment"
    private _id: string;
    constructor(id: string, config: aws_network_interface_sg_attachment_config) {
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
    
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.network_interface_id`)
    }
    get ref_security_group_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.security_group_id`)
    }
}

