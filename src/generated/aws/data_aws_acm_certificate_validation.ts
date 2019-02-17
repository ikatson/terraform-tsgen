import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_acm_certificate_validation_config {
    certificate_arn: rstring
    validation_record_fqdns?: rstring[]
}

export class data_aws_acm_certificate_validation implements Data {
    config: data_aws_acm_certificate_validation_config
    private _is_data: boolean = true
    private _name: string = "data_aws_acm_certificate_validation"
    private _id: string;
    constructor(id: string, config: data_aws_acm_certificate_validation_config) {
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
    get ref_validation_record_fqdns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.validation_record_fqdns`)
  }
}

