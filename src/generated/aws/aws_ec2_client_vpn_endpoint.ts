import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ec2_client_vpn_endpoint__authentication_options {
    active_directory_id?: rstring
    root_certificate_chain_arn?: rstring
    type: rstring
}

export interface _aws_ec2_client_vpn_endpoint__connection_log_options {
    cloudwatch_log_group?: rstring
    cloudwatch_log_stream?: rstring
    enabled: rboolean
}

export interface aws_ec2_client_vpn_endpoint_config {
    authentication_options: _aws_ec2_client_vpn_endpoint__authentication_options[]
    client_cidr_block: rstring
    connection_log_options: _aws_ec2_client_vpn_endpoint__connection_log_options[]
    description?: rstring
    dns_name?: rstring
    dns_servers?: rstring[]
    server_certificate_arn: rstring
    status?: rstring
    transport_protocol?: rstring
}

export class aws_ec2_client_vpn_endpoint implements Resource {
    config: aws_ec2_client_vpn_endpoint_config
    private _is_data: boolean = false
    private _name: string = "aws_ec2_client_vpn_endpoint"
    private _id: string;
    constructor(id: string, config: aws_ec2_client_vpn_endpoint_config) {
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
    
    get ref_authentication_options(): Reference<_aws_ec2_client_vpn_endpoint__authentication_options[]> {
        return new Reference(`${this._name}.${this._id}.authentication_options`)
    }
    get ref_client_cidr_block(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.client_cidr_block`)
    }
    get ref_connection_log_options(): Reference<_aws_ec2_client_vpn_endpoint__connection_log_options[]> {
        return new Reference(`${this._name}.${this._id}.connection_log_options`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_dns_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.dns_name`)
    }
    get ref_dns_servers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.dns_servers`)
    }
    get ref_server_certificate_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.server_certificate_arn`)
    }
    get ref_status(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.status`)
    }
    get ref_transport_protocol(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.transport_protocol`)
    }
}

