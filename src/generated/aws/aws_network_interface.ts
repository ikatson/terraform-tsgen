import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_network_interface__attachment {
    attachment_id?: rstring
    device_index: rnumber
    instance: rstring
}

export interface aws_network_interface_config {
    attachment?: _aws_network_interface__attachment[]
    description?: rstring
    private_dns_name?: rstring
    private_ip?: rstring
    private_ips?: rstring[]
    private_ips_count?: rnumber
    security_groups?: rstring[]
    source_dest_check?: rboolean
    subnet_id: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_network_interface implements Resource {
    config: aws_network_interface_config
    private _is_data: boolean = false
    private _name: string = "aws_network_interface"
    private _id: string;
    constructor(id: string, config: aws_network_interface_config) {
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
    
    get ref_attachment(): Reference<_aws_network_interface__attachment[]> {
        return new Reference(`${this._name}.${this._id}.attachment`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_private_dns_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.private_dns_name`)
    }
    get ref_private_ip(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.private_ip`)
    }
    get ref_private_ips(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.private_ips`)
    }
    get ref_private_ips_count(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.private_ips_count`)
    }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.security_groups`)
    }
    get ref_source_dest_check(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.source_dest_check`)
    }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subnet_id`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

