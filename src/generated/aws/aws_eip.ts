import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_eip_config {
    allocation_id?: rstring
    associate_with_private_ip?: rstring
    association_id?: rstring
    domain?: rstring
    instance?: rstring
    network_interface?: rstring
    private_ip?: rstring
    public_ip?: rstring
    public_ipv4_pool?: rstring
    tags?: {[propName: string]: rstring}
    vpc?: rboolean
}

export class aws_eip implements Resource {
    config: aws_eip_config
    private _is_data: boolean = false
    private _name: string = "aws_eip"
    private _id: string;
    constructor(id: string, config: aws_eip_config) {
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
    
    get ref_allocation_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.allocation_id`)
    }
    get ref_associate_with_private_ip(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.associate_with_private_ip`)
    }
    get ref_association_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.association_id`)
    }
    get ref_domain(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.domain`)
    }
    get ref_instance(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance`)
    }
    get ref_network_interface(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.network_interface`)
    }
    get ref_private_ip(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.private_ip`)
    }
    get ref_public_ip(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.public_ip`)
    }
    get ref_public_ipv4_pool(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.public_ipv4_pool`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.vpc`)
    }
}

