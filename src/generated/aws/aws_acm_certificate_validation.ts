import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_acm_certificate_validation_config {
    certificate_arn: rstring
    validation_record_fqdns?: rstring[]
}

export class aws_acm_certificate_validation implements Resource {
    config: aws_acm_certificate_validation_config
    private _is_data: boolean = false
    private _name: string = "aws_acm_certificate_validation"
    private _id: string;
    constructor(id: string, config: aws_acm_certificate_validation_config) {
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
    get ref_validation_record_fqdns(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.validation_record_fqdns`)
    }
}

