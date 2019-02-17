import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_vpc_peering_connection_options__accepter {
    allow_classic_link_to_remote_vpc?: rboolean
    allow_remote_vpc_dns_resolution?: rboolean
    allow_vpc_to_remote_classic_link?: rboolean
}

export interface _data_aws_vpc_peering_connection_options__requester {
    allow_classic_link_to_remote_vpc?: rboolean
    allow_remote_vpc_dns_resolution?: rboolean
    allow_vpc_to_remote_classic_link?: rboolean
}

export interface data_aws_vpc_peering_connection_options_config {
    accepter?: _data_aws_vpc_peering_connection_options__accepter[]
    requester?: _data_aws_vpc_peering_connection_options__requester[]
    vpc_peering_connection_id: rstring
}

export class data_aws_vpc_peering_connection_options implements Data {
    config: data_aws_vpc_peering_connection_options_config
    private _is_data: boolean = true
    private _name: string = "data_aws_vpc_peering_connection_options"
    private _id: string;
    constructor(id: string, config: data_aws_vpc_peering_connection_options_config) {
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
    
    get ref_accepter(): Reference<_data_aws_vpc_peering_connection_options__accepter[]> {
        return new Reference(`data.${this._name}.${this._id}.accepter`)
  }
    get ref_requester(): Reference<_data_aws_vpc_peering_connection_options__requester[]> {
        return new Reference(`data.${this._name}.${this._id}.requester`)
  }
    get ref_vpc_peering_connection_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_peering_connection_id`)
  }
}

