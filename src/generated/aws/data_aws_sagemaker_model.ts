import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_sagemaker_model__container {
    container_hostname?: rstring
    environment?: {[propName: string]: rstring}
    image: rstring
    model_data_url?: rstring
}

export interface _data_aws_sagemaker_model__primary_container {
    container_hostname?: rstring
    environment?: {[propName: string]: rstring}
    image: rstring
    model_data_url?: rstring
}

export interface _data_aws_sagemaker_model__vpc_config {
    security_group_ids: rstring[]
    subnets: rstring[]
}

export interface data_aws_sagemaker_model_config {
    arn?: rstring
    container?: _data_aws_sagemaker_model__container[]
    enable_network_isolation?: rboolean
    execution_role_arn: rstring
    name?: rstring
    primary_container?: _data_aws_sagemaker_model__primary_container[]
    tags?: {[propName: string]: rstring}
    vpc_config?: _data_aws_sagemaker_model__vpc_config[]
}

export class data_aws_sagemaker_model implements Data {
    config: data_aws_sagemaker_model_config
    private _is_data: boolean = true
    private _name: string = "data_aws_sagemaker_model"
    private _id: string;
    constructor(id: string, config: data_aws_sagemaker_model_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_container(): Reference<_data_aws_sagemaker_model__container[]> {
        return new Reference(`data.${this._name}.${this._id}.container`)
  }
    get ref_enable_network_isolation(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enable_network_isolation`)
  }
    get ref_execution_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.execution_role_arn`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_primary_container(): Reference<_data_aws_sagemaker_model__primary_container[]> {
        return new Reference(`data.${this._name}.${this._id}.primary_container`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_config(): Reference<_data_aws_sagemaker_model__vpc_config[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_config`)
  }
}

