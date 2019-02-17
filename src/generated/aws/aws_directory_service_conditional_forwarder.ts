import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_directory_service_conditional_forwarder_config {
    directory_id: rstring
    dns_ips: rstring[]
    remote_domain_name: rstring
}

export class aws_directory_service_conditional_forwarder implements Resource {
    config: aws_directory_service_conditional_forwarder_config
    private _is_data: boolean = false
    private _name: string = "aws_directory_service_conditional_forwarder"
    private _id: string;
    constructor(id: string, config: aws_directory_service_conditional_forwarder_config) {
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
    
    get ref_directory_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.directory_id`)
    }
    get ref_dns_ips(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.dns_ips`)
    }
    get ref_remote_domain_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.remote_domain_name`)
    }
}

