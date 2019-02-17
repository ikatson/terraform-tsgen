import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_lb_listener_rule__action__authenticate_cognito {
    authentication_request_extra_params?: {[propName: string]: rstring}
    on_unauthenticated_request?: rstring
    scope?: rstring
    session_cookie_name?: rstring
    session_timeout?: rnumber
    user_pool_arn: rstring
    user_pool_client_id: rstring
    user_pool_domain: rstring
}

export interface __aws_lb_listener_rule__action__authenticate_oidc {
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

export interface __aws_lb_listener_rule__action__fixed_response {
    content_type: rstring
    message_body?: rstring
    status_code?: rstring
}

export interface __aws_lb_listener_rule__action__redirect {
    host?: rstring
    path?: rstring
    port?: rstring
    protocol?: rstring
    query?: rstring
    status_code: rstring
}

export interface _aws_lb_listener_rule__action {
    authenticate_cognito?: __aws_lb_listener_rule__action__authenticate_cognito[]
    authenticate_oidc?: __aws_lb_listener_rule__action__authenticate_oidc[]
    fixed_response?: __aws_lb_listener_rule__action__fixed_response[]
    order?: rnumber
    redirect?: __aws_lb_listener_rule__action__redirect[]
    target_group_arn?: rstring
    type: rstring
}

export interface _aws_lb_listener_rule__condition {
    field?: rstring
    values?: rstring[]
}

export interface aws_lb_listener_rule_config {
    action: _aws_lb_listener_rule__action[]
    arn?: rstring
    condition: _aws_lb_listener_rule__condition[]
    listener_arn: rstring
    priority?: rnumber
}

export class aws_lb_listener_rule implements Resource {
    config: aws_lb_listener_rule_config
    private _is_data: boolean = false
    private _name: string = "aws_lb_listener_rule"
    private _id: string;
    constructor(id: string, config: aws_lb_listener_rule_config) {
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
    
    get ref_action(): Reference<_aws_lb_listener_rule__action[]> {
        return new Reference(`${this._name}.${this._id}.action`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_condition(): Reference<_aws_lb_listener_rule__condition[]> {
        return new Reference(`${this._name}.${this._id}.condition`)
    }
    get ref_listener_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.listener_arn`)
    }
    get ref_priority(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.priority`)
    }
}

