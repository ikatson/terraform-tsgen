import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_redshift_security_group__ingress {
    cidr?: rstring
    security_group_name?: rstring
    security_group_owner_id?: rstring
}

export interface data_aws_redshift_security_group_config {
    description?: rstring
    ingress: _data_aws_redshift_security_group__ingress[]
    name: rstring
}

export class data_aws_redshift_security_group implements Data {
    config: data_aws_redshift_security_group_config
    private _is_data: boolean = true
    private _name: string = "data_aws_redshift_security_group"
    private _id: string;
    constructor(id: string, config: data_aws_redshift_security_group_config) {
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
    get ref_ingress(): Reference<_data_aws_redshift_security_group__ingress[]> {
        return new Reference(`data.${this._name}.${this._id}.ingress`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

