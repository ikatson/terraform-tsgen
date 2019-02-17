import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_codecommit_trigger__trigger {
    branches?: rstring[]
    custom_data?: rstring
    destination_arn: rstring
    events: rstring[]
    name: rstring
}

export interface data_aws_codecommit_trigger_config {
    configuration_id?: rstring
    repository_name: rstring
    trigger: _data_aws_codecommit_trigger__trigger[]
}

export class data_aws_codecommit_trigger implements Data {
    config: data_aws_codecommit_trigger_config
    private _is_data: boolean = true
    private _name: string = "data_aws_codecommit_trigger"
    private _id: string;
    constructor(id: string, config: data_aws_codecommit_trigger_config) {
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
    
    get ref_configuration_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.configuration_id`)
  }
    get ref_repository_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.repository_name`)
  }
    get ref_trigger(): Reference<_data_aws_codecommit_trigger__trigger[]> {
        return new Reference(`data.${this._name}.${this._id}.trigger`)
  }
}

