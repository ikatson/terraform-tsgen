import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_vpc_endpoint_service_config {
    acceptance_required: rboolean
    allowed_principals?: rstring[]
    availability_zones?: rstring[]
    base_endpoint_dns_names?: rstring[]
    network_load_balancer_arns: rstring[]
    private_dns_name?: rstring
    service_name?: rstring
    service_type?: rstring
    state?: rstring
}

export class aws_vpc_endpoint_service implements Resource {
    config: aws_vpc_endpoint_service_config
    private _is_data: boolean = false
    private _name: string = "aws_vpc_endpoint_service"
    private _id: string;
    constructor(id: string, config: aws_vpc_endpoint_service_config) {
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
        return new Reference(`${this._name}.${this._id}.acceptance_required`)
    }
    get ref_allowed_principals(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.allowed_principals`)
    }
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.availability_zones`)
    }
    get ref_base_endpoint_dns_names(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.base_endpoint_dns_names`)
    }
    get ref_network_load_balancer_arns(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.network_load_balancer_arns`)
    }
    get ref_private_dns_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.private_dns_name`)
    }
    get ref_service_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.service_name`)
    }
    get ref_service_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.service_type`)
    }
    get ref_state(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.state`)
    }
}

