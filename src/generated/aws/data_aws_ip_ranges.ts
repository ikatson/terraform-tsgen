import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ip_ranges_config {
    cidr_blocks?: rstring[]
    create_date?: rstring
    ipv6_cidr_blocks?: rstring[]
    regions?: rstring[]
    services: rstring[]
    sync_token?: rnumber
    url?: rstring
}

export class data_aws_ip_ranges implements Data {
    config: data_aws_ip_ranges_config
    private _is_data: boolean = true
    private _name: string = "aws_ip_ranges"
    private _id: string;
    constructor(id: string, config: data_aws_ip_ranges_config) {
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
    
    get ref_cidr_blocks(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.cidr_blocks`)
  }
    get ref_create_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.create_date`)
  }
    get ref_ipv6_cidr_blocks(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ipv6_cidr_blocks`)
  }
    get ref_regions(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.regions`)
  }
    get ref_services(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.services`)
  }
    get ref_sync_token(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.sync_token`)
  }
    get ref_url(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.url`)
  }
}

