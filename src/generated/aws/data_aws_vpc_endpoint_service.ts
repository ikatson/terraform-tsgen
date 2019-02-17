import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_vpc_endpoint_service_config {
    acceptance_required?: rboolean
    availability_zones?: rstring[]
    base_endpoint_dns_names?: rstring[]
    owner?: rstring
    private_dns_name?: rstring
    service?: rstring
    service_name?: rstring
    service_type?: rstring
    vpc_endpoint_policy_supported?: rboolean
}

export class data_aws_vpc_endpoint_service implements Data {
    config: data_aws_vpc_endpoint_service_config
    private _is_data: boolean = true
    private _name: string = "aws_vpc_endpoint_service"
    private _id: string;
    constructor(id: string, config: data_aws_vpc_endpoint_service_config) {
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
    
    get ref_acceptance_required(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.acceptance_required`)
  }
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.availability_zones`)
  }
    get ref_base_endpoint_dns_names(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.base_endpoint_dns_names`)
  }
    get ref_owner(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.owner`)
  }
    get ref_private_dns_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.private_dns_name`)
  }
    get ref_service(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service`)
  }
    get ref_service_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_name`)
  }
    get ref_service_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_type`)
  }
    get ref_vpc_endpoint_policy_supported(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.vpc_endpoint_policy_supported`)
  }
}

