import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_vpc_peering_connection_accepter__accepter {
    allow_classic_link_to_remote_vpc?: rboolean
    allow_remote_vpc_dns_resolution?: rboolean
    allow_vpc_to_remote_classic_link?: rboolean
}

export interface _data_aws_vpc_peering_connection_accepter__requester {
    allow_classic_link_to_remote_vpc?: rboolean
    allow_remote_vpc_dns_resolution?: rboolean
    allow_vpc_to_remote_classic_link?: rboolean
}

export interface data_aws_vpc_peering_connection_accepter_config {
    accept_status?: rstring
    accepter?: _data_aws_vpc_peering_connection_accepter__accepter[]
    auto_accept?: rboolean
    peer_owner_id?: rstring
    peer_region?: rstring
    peer_vpc_id?: rstring
    requester?: _data_aws_vpc_peering_connection_accepter__requester[]
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
    vpc_peering_connection_id: rstring
}

export class data_aws_vpc_peering_connection_accepter implements Data {
    config: data_aws_vpc_peering_connection_accepter_config
    private _is_data: boolean = true
    private _name: string = "data_aws_vpc_peering_connection_accepter"
    private _id: string;
    constructor(id: string, config: data_aws_vpc_peering_connection_accepter_config) {
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
    
    get ref_accept_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.accept_status`)
  }
    get ref_accepter(): Reference<_data_aws_vpc_peering_connection_accepter__accepter[]> {
        return new Reference(`data.${this._name}.${this._id}.accepter`)
  }
    get ref_auto_accept(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.auto_accept`)
  }
    get ref_peer_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.peer_owner_id`)
  }
    get ref_peer_region(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.peer_region`)
  }
    get ref_peer_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.peer_vpc_id`)
  }
    get ref_requester(): Reference<_data_aws_vpc_peering_connection_accepter__requester[]> {
        return new Reference(`data.${this._name}.${this._id}.requester`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
    get ref_vpc_peering_connection_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_peering_connection_id`)
  }
}

