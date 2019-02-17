import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_elasticache_security_group_config {
    description?: rstring
    name: rstring
    security_group_names: rstring[]
}

export class data_aws_elasticache_security_group implements Data {
    config: data_aws_elasticache_security_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_elasticache_security_group"
    private _id: string;
    constructor(id: string, config: data_aws_elasticache_security_group_config) {
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
    
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_security_group_names(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_group_names`)
  }
}
