import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_elb_attachment_config {
    elb: rstring
    instance: rstring
}

export class aws_elb_attachment implements Resource {
    config: aws_elb_attachment_config
    private _is_data: boolean = false
    private _name: string = "aws_elb_attachment"
    private _id: string;
    constructor(id: string, config: aws_elb_attachment_config) {
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
    
    get ref_elb(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.elb`)
    }
    get ref_instance(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance`)
    }
}

