import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_security_group__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_security_group_config {
    arn?: rstring
    description?: rstring
    filter?: _data_aws_security_group__filter[]
    id?: rstring
    name?: rstring
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class data_aws_security_group implements Data {
    config: data_aws_security_group_config
    private _is_data: boolean = true
    private _name: string = "aws_security_group"
    private _id: string;
    constructor(id: string, config: data_aws_security_group_config) {
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
    get ref_filter(): Reference<_data_aws_security_group__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

