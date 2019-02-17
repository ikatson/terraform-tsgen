import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_config_configuration_aggregator__account_aggregation_source {
    account_ids: rstring[]
    all_regions?: rboolean
    regions?: rstring[]
}

export interface _data_aws_config_configuration_aggregator__organization_aggregation_source {
    all_regions?: rboolean
    regions?: rstring[]
    role_arn: rstring
}

export interface data_aws_config_configuration_aggregator_config {
    account_aggregation_source?: _data_aws_config_configuration_aggregator__account_aggregation_source[]
    arn?: rstring
    name: rstring
    organization_aggregation_source?: _data_aws_config_configuration_aggregator__organization_aggregation_source[]
}

export class data_aws_config_configuration_aggregator implements Data {
    config: data_aws_config_configuration_aggregator_config
    private _is_data: boolean = true
    private _name: string = "data_aws_config_configuration_aggregator"
    private _id: string;
    constructor(id: string, config: data_aws_config_configuration_aggregator_config) {
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
    
    get ref_account_aggregation_source(): Reference<_data_aws_config_configuration_aggregator__account_aggregation_source[]> {
        return new Reference(`data.${this._name}.${this._id}.account_aggregation_source`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_organization_aggregation_source(): Reference<_data_aws_config_configuration_aggregator__organization_aggregation_source[]> {
        return new Reference(`data.${this._name}.${this._id}.organization_aggregation_source`)
  }
}

