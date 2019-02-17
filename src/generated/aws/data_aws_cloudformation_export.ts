import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_cloudformation_export_config {
    exporting_stack_id?: rstring
    name: rstring
    value?: rstring
}

export class data_aws_cloudformation_export implements Data {
    config: data_aws_cloudformation_export_config
    private _is_data: boolean = true
    private _name: string = "aws_cloudformation_export"
    private _id: string;
    constructor(id: string, config: data_aws_cloudformation_export_config) {
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
    
    get ref_exporting_stack_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.exporting_stack_id`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_value(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.value`)
  }
}

