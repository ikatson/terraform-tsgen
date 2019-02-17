import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_docdb_subnet_group_config {
    arn?: rstring
    description?: rstring
    name?: rstring
    name_prefix?: rstring
    subnet_ids: rstring[]
    tags?: {[propName: string]: rstring}
}

export class data_aws_docdb_subnet_group implements Data {
    config: data_aws_docdb_subnet_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_docdb_subnet_group"
    private _id: string;
    constructor(id: string, config: data_aws_docdb_subnet_group_config) {
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
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_prefix`)
  }
    get ref_subnet_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.subnet_ids`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

