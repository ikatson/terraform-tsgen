import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_appmesh_mesh_config {
    arn?: rstring
    created_date?: rstring
    last_updated_date?: rstring
    name: rstring
}

export class data_aws_appmesh_mesh implements Data {
    config: data_aws_appmesh_mesh_config
    private _is_data: boolean = true
    private _name: string = "data_aws_appmesh_mesh"
    private _id: string;
    constructor(id: string, config: data_aws_appmesh_mesh_config) {
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
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

