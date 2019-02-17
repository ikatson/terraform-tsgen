import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_codedeploy_deployment_config__minimum_healthy_hosts {
    type?: rstring
    value?: rnumber
}

export interface __data_aws_codedeploy_deployment_config__traffic_routing_config__time_based_canary {
    interval?: rnumber
    percentage?: rnumber
}

export interface __data_aws_codedeploy_deployment_config__traffic_routing_config__time_based_linear {
    interval?: rnumber
    percentage?: rnumber
}

export interface _data_aws_codedeploy_deployment_config__traffic_routing_config {
    time_based_canary?: __data_aws_codedeploy_deployment_config__traffic_routing_config__time_based_canary[]
    time_based_linear?: __data_aws_codedeploy_deployment_config__traffic_routing_config__time_based_linear[]
    type?: rstring
}

export interface data_aws_codedeploy_deployment_config_config {
    compute_platform?: rstring
    deployment_config_id?: rstring
    deployment_config_name: rstring
    minimum_healthy_hosts?: _data_aws_codedeploy_deployment_config__minimum_healthy_hosts[]
    traffic_routing_config?: _data_aws_codedeploy_deployment_config__traffic_routing_config[]
}

export class data_aws_codedeploy_deployment_config implements Data {
    config: data_aws_codedeploy_deployment_config_config
    private _is_data: boolean = true
    private _name: string = "data_aws_codedeploy_deployment_config"
    private _id: string;
    constructor(id: string, config: data_aws_codedeploy_deployment_config_config) {
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
    
    get ref_compute_platform(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.compute_platform`)
  }
    get ref_deployment_config_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.deployment_config_id`)
  }
    get ref_deployment_config_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.deployment_config_name`)
  }
    get ref_minimum_healthy_hosts(): Reference<_data_aws_codedeploy_deployment_config__minimum_healthy_hosts[]> {
        return new Reference(`data.${this._name}.${this._id}.minimum_healthy_hosts`)
  }
    get ref_traffic_routing_config(): Reference<_data_aws_codedeploy_deployment_config__traffic_routing_config[]> {
        return new Reference(`data.${this._name}.${this._id}.traffic_routing_config`)
  }
}

