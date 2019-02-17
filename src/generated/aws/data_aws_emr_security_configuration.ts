import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_emr_security_configuration_config {
    configuration: rstring
    creation_date?: rstring
    name?: rstring
    name_prefix?: rstring
}

export class data_aws_emr_security_configuration implements Data {
    config: data_aws_emr_security_configuration_config
    private _is_data: boolean = true
    private _name: string = "data_aws_emr_security_configuration"
    private _id: string;
    constructor(id: string, config: data_aws_emr_security_configuration_config) {
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
    
    get ref_configuration(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.configuration`)
  }
    get ref_creation_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.creation_date`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name_prefix`)
  }
}

