import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_ami_ids__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_ami_ids_config {
    executable_users?: rstring[]
    filter?: _data_aws_ami_ids__filter[]
    ids?: rstring[]
    name_regex?: rstring
    owners?: rstring[]
    sort_ascending?: rboolean
}

export class data_aws_ami_ids implements Data {
    config: data_aws_ami_ids_config
    private _is_data: boolean = true
    private _name: string = "aws_ami_ids"
    private _id: string;
    constructor(id: string, config: data_aws_ami_ids_config) {
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
    
    get ref_executable_users(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.executable_users`)
  }
    get ref_filter(): Reference<_data_aws_ami_ids__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ids`)
  }
    get ref_name_regex(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_regex`)
  }
    get ref_owners(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.owners`)
  }
    get ref_sort_ascending(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.sort_ascending`)
  }
}

