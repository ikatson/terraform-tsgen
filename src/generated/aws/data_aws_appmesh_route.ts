import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_appmesh_route__spec__http_route__action__weighted_target {
    virtual_node: rstring
    weight: rnumber
}

export interface __data_aws_appmesh_route__spec__http_route__action {
    weighted_target: __data_aws_appmesh_route__spec__http_route__action__weighted_target[]
}

export interface __data_aws_appmesh_route__spec__http_route__match {
    prefix: rstring
}

export interface __data_aws_appmesh_route__spec__http_route {
    action: __data_aws_appmesh_route__spec__http_route__action[]
    match: __data_aws_appmesh_route__spec__http_route__match[]
}

export interface _data_aws_appmesh_route__spec {
    http_route?: __data_aws_appmesh_route__spec__http_route[]
}

export interface data_aws_appmesh_route_config {
    arn?: rstring
    created_date?: rstring
    last_updated_date?: rstring
    mesh_name: rstring
    name: rstring
    spec: _data_aws_appmesh_route__spec[]
    virtual_router_name: rstring
}

export class data_aws_appmesh_route implements Data {
    config: data_aws_appmesh_route_config
    private _is_data: boolean = true
    private _name: string = "data_aws_appmesh_route"
    private _id: string;
    constructor(id: string, config: data_aws_appmesh_route_config) {
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
    get ref_spec(): Reference<_data_aws_appmesh_route__spec[]> {
        return new Reference(`data.${this._name}.${this._id}.spec`)
  }
    get ref_virtual_router_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.virtual_router_name`)
  }
}

