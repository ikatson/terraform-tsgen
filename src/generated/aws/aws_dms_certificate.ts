import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_dms_certificate_config {
    certificate_arn?: rstring
    certificate_id: rstring
    certificate_pem?: rstring
    certificate_wallet?: rstring
}

export class aws_dms_certificate implements Resource {
    config: aws_dms_certificate_config
    private _is_data: boolean = false
    private _name: string = "aws_dms_certificate"
    private _id: string;
    constructor(id: string, config: aws_dms_certificate_config) {
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
    get ref_certificate_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_id`)
    }
    get ref_certificate_pem(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_pem`)
    }
    get ref_certificate_wallet(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_wallet`)
    }
}

