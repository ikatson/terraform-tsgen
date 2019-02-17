import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_sagemaker_notebook_instance_config {
    arn?: rstring
    instance_type: rstring
    kms_key_id?: rstring
    name: rstring
    role_arn: rstring
    security_groups?: rstring[]
    subnet_id?: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_sagemaker_notebook_instance implements Data {
    config: data_aws_sagemaker_notebook_instance_config
    private _is_data: boolean = true
    private _name: string = "data_aws_sagemaker_notebook_instance"
    private _id: string;
    constructor(id: string, config: data_aws_sagemaker_notebook_instance_config) {
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
    get ref_instance_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.instance_type`)
  }
    get ref_kms_key_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kms_key_id`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.role_arn`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.subnet_id`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

