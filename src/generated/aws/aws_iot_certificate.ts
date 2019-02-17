import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_iot_certificate_config {
    active: rboolean
    arn?: rstring
    csr: rstring
}

export class aws_iot_certificate implements Resource {
    config: aws_iot_certificate_config
    private _is_data: boolean = false
    private _name: string = "aws_iot_certificate"
    private _id: string;
    constructor(id: string, config: aws_iot_certificate_config) {
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
    
    get ref_active(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.active`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_csr(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.csr`)
    }
}

