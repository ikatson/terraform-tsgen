import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_lb_listener__default_action__authenticate_cognito {
    authentication_request_extra_params?: {[propName: string]: rstring}
    on_unauthenticated_request?: rstring
    scope?: rstring
    session_cookie_name?: rstring
    session_timeout?: rnumber
    user_pool_arn: rstring
    user_pool_client_id: rstring
    user_pool_domain: rstring
}

export interface __aws_lb_listener__default_action__authenticate_oidc {
    authentication_request_extra_params?: {[propName: string]: rstring}
    authorization_endpoint: rstring
    client_id: rstring
    client_secret: rstring
    issuer: rstring
    on_unauthenticated_request?: rstring
    scope?: rstring
    session_cookie_name?: rstring
    session_timeout?: rnumber
    token_endpoint: rstring
    user_info_endpoint: rstring
}

export interface __aws_lb_listener__default_action__fixed_response {
    content_type: rstring
    message_body?: rstring
    status_code?: rstring
}

export interface __aws_lb_listener__default_action__redirect {
    host?: rstring
    path?: rstring
    port?: rstring
    protocol?: rstring
    query?: rstring
    status_code: rstring
}

export interface _aws_lb_listener__default_action {
    authenticate_cognito?: __aws_lb_listener__default_action__authenticate_cognito[]
    authenticate_oidc?: __aws_lb_listener__default_action__authenticate_oidc[]
    fixed_response?: __aws_lb_listener__default_action__fixed_response[]
    order?: rnumber
    redirect?: __aws_lb_listener__default_action__redirect[]
    target_group_arn?: rstring
    type: rstring
}

export interface aws_lb_listener_config {
    arn?: rstring
    certificate_arn?: rstring
    default_action: _aws_lb_listener__default_action[]
    load_balancer_arn: rstring
    port: rnumber
    protocol?: rstring
    ssl_policy?: rstring
}

export class aws_lb_listener implements Resource {
    config: aws_lb_listener_config
    private _is_data: boolean = false
    private _name: string = "aws_lb_listener"
    private _id: string;
    constructor(id: string, config: aws_lb_listener_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_certificate_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.certificate_arn`)
    }
    get ref_default_action(): Reference<_aws_lb_listener__default_action[]> {
        return new Reference(`${this._name}.${this._id}.default_action`)
    }
    get ref_load_balancer_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.load_balancer_arn`)
    }
    get ref_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.port`)
    }
    get ref_protocol(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.protocol`)
    }
    get ref_ssl_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ssl_policy`)
    }
}

