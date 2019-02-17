import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_appmesh_virtual_node__spec__listener__health_check {
    healthy_threshold: rnumber
    interval_millis: rnumber
    path?: rstring
    port?: rnumber
    protocol: rstring
    timeout_millis: rnumber
    unhealthy_threshold: rnumber
}

export interface __data_aws_appmesh_virtual_node__spec__listener__port_mapping {
    port: rnumber
    protocol: rstring
}

export interface __data_aws_appmesh_virtual_node__spec__listener {
    health_check?: __data_aws_appmesh_virtual_node__spec__listener__health_check[]
    port_mapping: __data_aws_appmesh_virtual_node__spec__listener__port_mapping[]
}

export interface __data_aws_appmesh_virtual_node__spec__service_discovery__dns {
    service_name: rstring
}

export interface __data_aws_appmesh_virtual_node__spec__service_discovery {
    dns: __data_aws_appmesh_virtual_node__spec__service_discovery__dns[]
}

export interface _data_aws_appmesh_virtual_node__spec {
    backends?: rstring[]
    listener?: __data_aws_appmesh_virtual_node__spec__listener[]
    service_discovery?: __data_aws_appmesh_virtual_node__spec__service_discovery[]
}

export interface data_aws_appmesh_virtual_node_config {
    arn?: rstring
    created_date?: rstring
    last_updated_date?: rstring
    mesh_name: rstring
    name: rstring
    spec: _data_aws_appmesh_virtual_node__spec[]
}

export class data_aws_appmesh_virtual_node implements Data {
    config: data_aws_appmesh_virtual_node_config
    private _is_data: boolean = true
    private _name: string = "data_aws_appmesh_virtual_node"
    private _id: string;
    constructor(id: string, config: data_aws_appmesh_virtual_node_config) {
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
    get ref_created_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.created_date`)
  }
    get ref_last_updated_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.last_updated_date`)
  }
    get ref_mesh_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.mesh_name`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_spec(): Reference<_data_aws_appmesh_virtual_node__spec[]> {
        return new Reference(`data.${this._name}.${this._id}.spec`)
  }
}

