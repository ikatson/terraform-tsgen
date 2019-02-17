import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_vpc_peering_connection__filter {
    name: rstring
    values: rstring[]
}

export interface data_aws_vpc_peering_connection_config {
    accepter?: {[propName: string]: rstring}
    cidr_block?: rstring
    filter?: _data_aws_vpc_peering_connection__filter[]
    id?: rstring
    owner_id?: rstring
    peer_cidr_block?: rstring
    peer_owner_id?: rstring
    peer_region?: rstring
    peer_vpc_id?: rstring
    region?: rstring
    requester?: {[propName: string]: rstring}
    status?: rstring
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class data_aws_vpc_peering_connection implements Data {
    config: data_aws_vpc_peering_connection_config
    private _is_data: boolean = true
    private _name: string = "aws_vpc_peering_connection"
    private _id: string;
    constructor(id: string, config: data_aws_vpc_peering_connection_config) {
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
    
    get ref_accepter(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.accepter`)
  }
    get ref_cidr_block(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cidr_block`)
  }
    get ref_filter(): Reference<_data_aws_vpc_peering_connection__filter[]> {
        return new Reference(`data.${this._name}.${this._id}.filter`)
  }
    get ref_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.id`)
  }
    get ref_owner_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner_id`)
  }
    get ref_peer_cidr_block(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.peer_cidr_block`)
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
    get ref_region(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.region`)
  }
    get ref_requester(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.requester`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

