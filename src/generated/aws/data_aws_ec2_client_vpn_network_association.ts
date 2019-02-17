import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ec2_client_vpn_network_association_config {
    client_vpn_endpoint_id: rstring
    security_groups?: rstring[]
    status?: rstring
    subnet_id: rstring
    vpc_id?: rstring
}

export class data_aws_ec2_client_vpn_network_association implements Data {
    config: data_aws_ec2_client_vpn_network_association_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ec2_client_vpn_network_association"
    private _id: string;
    constructor(id: string, config: data_aws_ec2_client_vpn_network_association_config) {
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
    
    get ref_client_vpn_endpoint_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.client_vpn_endpoint_id`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_status(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.status`)
  }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subnet_id`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

