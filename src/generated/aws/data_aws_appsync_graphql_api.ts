import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_appsync_graphql_api__log_config {
    cloudwatch_logs_role_arn: rstring
    field_log_level: rstring
}

export interface _data_aws_appsync_graphql_api__openid_connect_config {
    auth_ttl?: rnumber
    client_id?: rstring
    iat_ttl?: rnumber
    issuer: rstring
}

export interface _data_aws_appsync_graphql_api__user_pool_config {
    app_id_client_regex?: rstring
    aws_region?: rstring
    default_action: rstring
    user_pool_id: rstring
}

export interface data_aws_appsync_graphql_api_config {
    arn?: rstring
    authentication_type: rstring
    log_config?: _data_aws_appsync_graphql_api__log_config[]
    name: rstring
    openid_connect_config?: _data_aws_appsync_graphql_api__openid_connect_config[]
    uris?: {[propName: string]: rstring}
    user_pool_config?: _data_aws_appsync_graphql_api__user_pool_config[]
}

export class data_aws_appsync_graphql_api implements Data {
    config: data_aws_appsync_graphql_api_config
    private _is_data: boolean = true
    private _name: string = "data_aws_appsync_graphql_api"
    private _id: string;
    constructor(id: string, config: data_aws_appsync_graphql_api_config) {
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
    get ref_authentication_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.authentication_type`)
  }
    get ref_log_config(): Reference<_data_aws_appsync_graphql_api__log_config[]> {
        return new Reference(`data.${this._name}.${this._id}.log_config`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_openid_connect_config(): Reference<_data_aws_appsync_graphql_api__openid_connect_config[]> {
        return new Reference(`data.${this._name}.${this._id}.openid_connect_config`)
  }
    get ref_uris(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.uris`)
  }
    get ref_user_pool_config(): Reference<_data_aws_appsync_graphql_api__user_pool_config[]> {
        return new Reference(`data.${this._name}.${this._id}.user_pool_config`)
  }
}

