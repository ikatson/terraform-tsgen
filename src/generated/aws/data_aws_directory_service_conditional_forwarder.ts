import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_directory_service_conditional_forwarder_config {
    directory_id: rstring
    dns_ips: rstring[]
    remote_domain_name: rstring
}

export class data_aws_directory_service_conditional_forwarder implements Data {
    config: data_aws_directory_service_conditional_forwarder_config
    private _is_data: boolean = true
    private _name: string = "data_aws_directory_service_conditional_forwarder"
    private _id: string;
    constructor(id: string, config: data_aws_directory_service_conditional_forwarder_config) {
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
        return new Reference(`data.${this._name}.${this._id}.directory_id`)
  }
    get ref_dns_ips(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.dns_ips`)
  }
    get ref_remote_domain_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.remote_domain_name`)
  }
}

