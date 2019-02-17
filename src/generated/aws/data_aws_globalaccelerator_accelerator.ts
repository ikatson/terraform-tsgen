import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_globalaccelerator_accelerator__attributes {
    flow_logs_enabled?: rboolean
    flow_logs_s3_bucket?: rstring
    flow_logs_s3_prefix?: rstring
}

export interface _data_aws_globalaccelerator_accelerator__ip_sets {
    ip_addresses?: rstring[]
    ip_family?: rstring
}

export interface data_aws_globalaccelerator_accelerator_config {
    attributes?: _data_aws_globalaccelerator_accelerator__attributes[]
    enabled?: rboolean
    ip_address_type?: rstring
    ip_sets?: _data_aws_globalaccelerator_accelerator__ip_sets[]
    name: rstring
}

export class data_aws_globalaccelerator_accelerator implements Data {
    config: data_aws_globalaccelerator_accelerator_config
    private _is_data: boolean = true
    private _name: string = "data_aws_globalaccelerator_accelerator"
    private _id: string;
    constructor(id: string, config: data_aws_globalaccelerator_accelerator_config) {
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
    
    get ref_attributes(): Reference<_data_aws_globalaccelerator_accelerator__attributes[]> {
        return new Reference(`data.${this._name}.${this._id}.attributes`)
  }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enabled`)
  }
    get ref_ip_address_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.ip_address_type`)
  }
    get ref_ip_sets(): Reference<_data_aws_globalaccelerator_accelerator__ip_sets[]> {
        return new Reference(`data.${this._name}.${this._id}.ip_sets`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

