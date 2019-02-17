import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_lb_listener_certificate_config {
    certificate_arn: rstring
    listener_arn: rstring
}

export class aws_lb_listener_certificate implements Resource {
    config: aws_lb_listener_certificate_config
    private _is_data: boolean = false
    private _name: string = "aws_lb_listener_certificate"
    private _id: string;
    constructor(id: string, config: aws_lb_listener_certificate_config) {
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
    
    get ref_certificate_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_arn`)
    }
    get ref_listener_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.listener_arn`)
    }
}

