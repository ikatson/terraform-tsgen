import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_worklink_fleet__identity_provider {
    saml_metadata: rstring
    type: rstring
}

export interface _data_aws_worklink_fleet__network {
    security_group_ids: rstring[]
    subnet_ids: rstring[]
    vpc_id: rstring
}

export interface data_aws_worklink_fleet_config {
    arn?: rstring
    audit_stream_arn?: rstring
    company_code?: rstring
    created_time?: rstring
    device_ca_certificate?: rstring
    display_name?: rstring
    identity_provider?: _data_aws_worklink_fleet__identity_provider[]
    last_updated_time?: rstring
    name: rstring
    network?: _data_aws_worklink_fleet__network[]
    optimize_for_end_user_location?: rboolean
}

export class data_aws_worklink_fleet implements Data {
    config: data_aws_worklink_fleet_config
    private _is_data: boolean = true
    private _name: string = "data_aws_worklink_fleet"
    private _id: string;
    constructor(id: string, config: data_aws_worklink_fleet_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_audit_stream_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.audit_stream_arn`)
  }
    get ref_company_code(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.company_code`)
  }
    get ref_created_time(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.created_time`)
  }
    get ref_device_ca_certificate(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.device_ca_certificate`)
  }
    get ref_display_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.display_name`)
  }
    get ref_identity_provider(): Reference<_data_aws_worklink_fleet__identity_provider[]> {
        return new Reference(`data.${this._name}.${this._id}.identity_provider`)
  }
    get ref_last_updated_time(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.last_updated_time`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_network(): Reference<_data_aws_worklink_fleet__network[]> {
        return new Reference(`data.${this._name}.${this._id}.network`)
  }
    get ref_optimize_for_end_user_location(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.optimize_for_end_user_location`)
  }
}

