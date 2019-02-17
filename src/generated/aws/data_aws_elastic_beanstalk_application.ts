import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_elastic_beanstalk_application__appversion_lifecycle {
    delete_source_from_s3?: rboolean
    max_age_in_days?: rnumber
    max_count?: rnumber
    service_role?: rstring
}

export interface data_aws_elastic_beanstalk_application_config {
    appversion_lifecycle?: _data_aws_elastic_beanstalk_application__appversion_lifecycle[]
    arn?: rstring
    description?: rstring
    name: rstring
}

export class data_aws_elastic_beanstalk_application implements Data {
    config: data_aws_elastic_beanstalk_application_config
    private _is_data: boolean = true
    private _name: string = "aws_elastic_beanstalk_application"
    private _id: string;
    constructor(id: string, config: data_aws_elastic_beanstalk_application_config) {
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
    
    get ref_appversion_lifecycle(): Reference<_data_aws_elastic_beanstalk_application__appversion_lifecycle[]> {
        return new Reference(`data.${this._name}.${this._id}.appversion_lifecycle`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

