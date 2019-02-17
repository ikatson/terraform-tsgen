import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_appsync_datasource__dynamodb_config {
    region?: rstring
    table_name: rstring
    use_caller_credentials?: rboolean
}

export interface _data_aws_appsync_datasource__elasticsearch_config {
    endpoint: rstring
    region?: rstring
}

export interface _data_aws_appsync_datasource__http_config {
    endpoint: rstring
}

export interface _data_aws_appsync_datasource__lambda_config {
    function_arn: rstring
}

export interface data_aws_appsync_datasource_config {
    api_id: rstring
    arn?: rstring
    description?: rstring
    dynamodb_config?: _data_aws_appsync_datasource__dynamodb_config[]
    elasticsearch_config?: _data_aws_appsync_datasource__elasticsearch_config[]
    http_config?: _data_aws_appsync_datasource__http_config[]
    lambda_config?: _data_aws_appsync_datasource__lambda_config[]
    name: rstring
    service_role_arn?: rstring
    type: rstring
}

export class data_aws_appsync_datasource implements Data {
    config: data_aws_appsync_datasource_config
    private _is_data: boolean = true
    private _name: string = "data_aws_appsync_datasource"
    private _id: string;
    constructor(id: string, config: data_aws_appsync_datasource_config) {
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
    
    get ref_api_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.api_id`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_dynamodb_config(): Reference<_data_aws_appsync_datasource__dynamodb_config[]> {
        return new Reference(`data.${this._name}.${this._id}.dynamodb_config`)
  }
    get ref_elasticsearch_config(): Reference<_data_aws_appsync_datasource__elasticsearch_config[]> {
        return new Reference(`data.${this._name}.${this._id}.elasticsearch_config`)
  }
    get ref_http_config(): Reference<_data_aws_appsync_datasource__http_config[]> {
        return new Reference(`data.${this._name}.${this._id}.http_config`)
  }
    get ref_lambda_config(): Reference<_data_aws_appsync_datasource__lambda_config[]> {
        return new Reference(`data.${this._name}.${this._id}.lambda_config`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_service_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_role_arn`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

