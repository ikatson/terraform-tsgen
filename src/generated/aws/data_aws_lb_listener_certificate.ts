import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_lb_listener_certificate_config {
    certificate_arn: rstring
    listener_arn: rstring
}

export class data_aws_lb_listener_certificate implements Data {
    config: data_aws_lb_listener_certificate_config
    private _is_data: boolean = true
    private _name: string = "data_aws_lb_listener_certificate"
    private _id: string;
    constructor(id: string, config: data_aws_lb_listener_certificate_config) {
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
        return new Reference(`data.${this._name}.${this._id}.certificate_arn`)
  }
    get ref_listener_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.listener_arn`)
  }
}

