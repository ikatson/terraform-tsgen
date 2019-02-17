import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_vpc_peering_connection__accepter {
    allow_classic_link_to_remote_vpc?: rboolean
    allow_remote_vpc_dns_resolution?: rboolean
    allow_vpc_to_remote_classic_link?: rboolean
}

export interface _aws_vpc_peering_connection__requester {
    allow_classic_link_to_remote_vpc?: rboolean
    allow_remote_vpc_dns_resolution?: rboolean
    allow_vpc_to_remote_classic_link?: rboolean
}

export interface aws_vpc_peering_connection_config {
    accept_status?: rstring
    accepter?: _aws_vpc_peering_connection__accepter[]
    auto_accept?: rboolean
    peer_owner_id?: rstring
    peer_region?: rstring
    peer_vpc_id: rstring
    requester?: _aws_vpc_peering_connection__requester[]
    tags?: {[propName: string]: rstring}
    vpc_id: rstring
}

export class aws_vpc_peering_connection implements Resource {
    config: aws_vpc_peering_connection_config
    private _is_data: boolean = false
    private _name: string = "aws_vpc_peering_connection"
    private _id: string;
    constructor(id: string, config: aws_vpc_peering_connection_config) {
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
        return new Reference(`${this._name}.${this._id}.accept_status`)
    }
    get ref_accepter(): Reference<_aws_vpc_peering_connection__accepter[]> {
        return new Reference(`${this._name}.${this._id}.accepter`)
    }
    get ref_auto_accept(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.auto_accept`)
    }
    get ref_peer_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.peer_owner_id`)
    }
    get ref_peer_region(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.peer_region`)
    }
    get ref_peer_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.peer_vpc_id`)
    }
    get ref_requester(): Reference<_aws_vpc_peering_connection__requester[]> {
        return new Reference(`${this._name}.${this._id}.requester`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

