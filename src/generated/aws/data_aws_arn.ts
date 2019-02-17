import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_arn_config {
    account?: rstring
    arn: rstring
    partition?: rstring
    region?: rstring
    resource?: rstring
    service?: rstring
}

export class data_aws_arn implements Data {
    config: data_aws_arn_config
    private _is_data: boolean = true
    private _name: string = "aws_arn"
    private _id: string;
    constructor(id: string, config: data_aws_arn_config) {
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
    
    get ref_account(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.account`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_partition(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.partition`)
  }
    get ref_region(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.region`)
  }
    get ref_resource(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.resource`)
  }
    get ref_service(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service`)
  }
}

