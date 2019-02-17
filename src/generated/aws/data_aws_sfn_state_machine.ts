import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_sfn_state_machine_config {
    creation_date?: rstring
    definition: rstring
    name: rstring
    role_arn: rstring
    status?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_sfn_state_machine implements Data {
    config: data_aws_sfn_state_machine_config
    private _is_data: boolean = true
    private _name: string = "data_aws_sfn_state_machine"
    private _id: string;
    constructor(id: string, config: data_aws_sfn_state_machine_config) {
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
    
    get ref_creation_date(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.creation_date`)
  }
    get ref_definition(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.definition`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

