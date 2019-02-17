import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_route53_zone_config {
    caller_reference?: rstring
    comment?: rstring
    name?: rstring
    name_servers?: rstring[]
    private_zone?: rboolean
    resource_record_set_count?: rnumber
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
    zone_id?: rstring
}

export class data_aws_route53_zone implements Data {
    config: data_aws_route53_zone_config
    private _is_data: boolean = true
    private _name: string = "aws_route53_zone"
    private _id: string;
    constructor(id: string, config: data_aws_route53_zone_config) {
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
    
    get ref_caller_reference(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.caller_reference`)
  }
    get ref_comment(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.comment`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_servers(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.name_servers`)
  }
    get ref_private_zone(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.private_zone`)
  }
    get ref_resource_record_set_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.resource_record_set_count`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
    get ref_zone_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.zone_id`)
  }
}

