import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_codecommit_trigger__trigger {
    branches?: rstring[]
    custom_data?: rstring
    destination_arn: rstring
    events: rstring[]
    name: rstring
}

export interface aws_codecommit_trigger_config {
    configuration_id?: rstring
    repository_name: rstring
    trigger: _aws_codecommit_trigger__trigger[]
}

export class aws_codecommit_trigger implements Resource {
    config: aws_codecommit_trigger_config
    private _is_data: boolean = false
    private _name: string = "aws_codecommit_trigger"
    private _id: string;
    constructor(id: string, config: aws_codecommit_trigger_config) {
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
        return new Reference(`${this._name}.${this._id}.configuration_id`)
    }
    get ref_repository_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.repository_name`)
    }
    get ref_trigger(): Reference<_aws_codecommit_trigger__trigger[]> {
        return new Reference(`${this._name}.${this._id}.trigger`)
    }
}

