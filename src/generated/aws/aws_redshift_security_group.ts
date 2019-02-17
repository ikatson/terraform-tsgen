import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_redshift_security_group__ingress {
    cidr?: rstring
    security_group_name?: rstring
    security_group_owner_id?: rstring
}

export interface aws_redshift_security_group_config {
    description?: rstring
    ingress: _aws_redshift_security_group__ingress[]
    name: rstring
}

export class aws_redshift_security_group implements Resource {
    config: aws_redshift_security_group_config
    private _is_data: boolean = false
    private _name: string = "aws_redshift_security_group"
    private _id: string;
    constructor(id: string, config: aws_redshift_security_group_config) {
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
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_ingress(): Reference<_aws_redshift_security_group__ingress[]> {
        return new Reference(`${this._name}.${this._id}.ingress`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

