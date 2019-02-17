import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_instances__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_instances_config {
    filter?: _data_aws_instances__filter[]
    ids?: rstring[]
    instance_state_names?: rstring[]
    instance_tags?: {[propName: string]: rstring}
    private_ips?: rstring[]
    public_ips?: rstring[]
}

export class data_aws_instances implements Data {
    config: data_aws_instances_config
    private _is_data: boolean = true
    private _name: string = "aws_instances"
    private _id: string;
    constructor(id: string, config: data_aws_instances_config) {
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
    
    get ref_filter(): Reference<_data_aws_instances__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.ids`)
  }
    get ref_instance_state_names(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.instance_state_names`)
  }
    get ref_instance_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.instance_tags`)
  }
    get ref_private_ips(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.private_ips`)
  }
    get ref_public_ips(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.public_ips`)
  }
}

