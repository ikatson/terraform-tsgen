import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_storagegateway_cached_iscsi_volume_config {
    arn?: rstring
    chap_enabled?: rboolean
    gateway_arn: rstring
    lun_number?: rnumber
    network_interface_id: rstring
    network_interface_port?: rnumber
    snapshot_id?: rstring
    source_volume_arn?: rstring
    target_arn?: rstring
    target_name: rstring
    volume_arn?: rstring
    volume_id?: rstring
    volume_size_in_bytes: rnumber
}

export class data_aws_storagegateway_cached_iscsi_volume implements Data {
    config: data_aws_storagegateway_cached_iscsi_volume_config
    private _is_data: boolean = true
    private _name: string = "data_aws_storagegateway_cached_iscsi_volume"
    private _id: string;
    constructor(id: string, config: data_aws_storagegateway_cached_iscsi_volume_config) {
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
    get ref_chap_enabled(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.chap_enabled`)
  }
    get ref_gateway_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.gateway_arn`)
  }
    get ref_lun_number(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.lun_number`)
  }
    get ref_network_interface_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_id`)
  }
    get ref_network_interface_port(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.network_interface_port`)
  }
    get ref_snapshot_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_id`)
  }
    get ref_source_volume_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_volume_arn`)
  }
    get ref_target_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.target_arn`)
  }
    get ref_target_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.target_name`)
  }
    get ref_volume_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.volume_arn`)
  }
    get ref_volume_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.volume_id`)
  }
    get ref_volume_size_in_bytes(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.volume_size_in_bytes`)
  }
}

