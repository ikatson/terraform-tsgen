import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __aws_cognito_user_pool__admin_create_user_config__invite_message_template {
    email_message?: rstring
    email_subject?: rstring
    sms_message?: rstring
}

export interface _aws_cognito_user_pool__admin_create_user_config {
    allow_admin_create_user_only?: rboolean
    invite_message_template?: __aws_cognito_user_pool__admin_create_user_config__invite_message_template[]
    unused_account_validity_days?: rnumber
}

export interface _aws_cognito_user_pool__device_configuration {
    challenge_required_on_new_device?: rboolean
    device_only_remembered_on_user_prompt?: rboolean
}

export interface _aws_cognito_user_pool__email_configuration {
    reply_to_email_address?: rstring
    source_arn?: rstring
}

export interface _aws_cognito_user_pool__lambda_config {
    create_auth_challenge?: rstring
    custom_message?: rstring
    define_auth_challenge?: rstring
    post_authentication?: rstring
    post_confirmation?: rstring
    pre_authentication?: rstring
    pre_sign_up?: rstring
    pre_token_generation?: rstring
    user_migration?: rstring
    verify_auth_challenge_response?: rstring
}

export interface _aws_cognito_user_pool__password_policy {
    minimum_length?: rnumber
    require_lowercase?: rboolean
    require_numbers?: rboolean
    require_symbols?: rboolean
    require_uppercase?: rboolean
}

export interface __aws_cognito_user_pool__schema__number_attribute_constraints {
    max_value?: rstring
    min_value?: rstring
}

export interface __aws_cognito_user_pool__schema__string_attribute_constraints {
    max_length?: rstring
    min_length?: rstring
}

export interface _aws_cognito_user_pool__schema {
    attribute_data_type: rstring
    developer_only_attribute?: rboolean
    mutable?: rboolean
    name: rstring
    number_attribute_constraints?: __aws_cognito_user_pool__schema__number_attribute_constraints[]
    required?: rboolean
    string_attribute_constraints?: __aws_cognito_user_pool__schema__string_attribute_constraints[]
}

export interface _aws_cognito_user_pool__sms_configuration {
    external_id: rstring
    sns_caller_arn: rstring
}

export interface _aws_cognito_user_pool__user_pool_add_ons {
    advanced_security_mode: rstring
}

export interface _aws_cognito_user_pool__verification_message_template {
    default_email_option?: rstring
    email_message?: rstring
    email_message_by_link?: rstring
    email_subject?: rstring
    email_subject_by_link?: rstring
    sms_message?: rstring
}

export interface aws_cognito_user_pool_config {
    admin_create_user_config?: _aws_cognito_user_pool__admin_create_user_config[]
    alias_attributes?: rstring[]
    arn?: rstring
    auto_verified_attributes?: rstring[]
    creation_date?: rstring
    device_configuration?: _aws_cognito_user_pool__device_configuration[]
    email_configuration?: _aws_cognito_user_pool__email_configuration[]
    email_verification_message?: rstring
    email_verification_subject?: rstring
    endpoint?: rstring
    lambda_config?: _aws_cognito_user_pool__lambda_config[]
    last_modified_date?: rstring
    mfa_configuration?: rstring
    name: rstring
    password_policy?: _aws_cognito_user_pool__password_policy[]
    schema?: _aws_cognito_user_pool__schema[]
    sms_authentication_message?: rstring
    sms_configuration?: _aws_cognito_user_pool__sms_configuration[]
    sms_verification_message?: rstring
    tags?: {[propName: string]: rstring}
    user_pool_add_ons?: _aws_cognito_user_pool__user_pool_add_ons[]
    username_attributes?: rstring[]
    verification_message_template?: _aws_cognito_user_pool__verification_message_template[]
}

export class aws_cognito_user_pool implements Resource {
    config: aws_cognito_user_pool_config
    private _is_data: boolean = false
    private _name: string = "aws_cognito_user_pool"
    private _id: string;
    constructor(id: string, config: aws_cognito_user_pool_config) {
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
    
    get ref_admin_create_user_config(): Reference<_aws_cognito_user_pool__admin_create_user_config[]> {
        return new Reference(`${this._name}.${this._id}.admin_create_user_config`)
    }
    get ref_alias_attributes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.alias_attributes`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_auto_verified_attributes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.auto_verified_attributes`)
    }
    get ref_creation_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.creation_date`)
    }
    get ref_device_configuration(): Reference<_aws_cognito_user_pool__device_configuration[]> {
        return new Reference(`${this._name}.${this._id}.device_configuration`)
    }
    get ref_email_configuration(): Reference<_aws_cognito_user_pool__email_configuration[]> {
        return new Reference(`${this._name}.${this._id}.email_configuration`)
    }
    get ref_email_verification_message(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.email_verification_message`)
    }
    get ref_email_verification_subject(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.email_verification_subject`)
    }
    get ref_endpoint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.endpoint`)
    }
    get ref_lambda_config(): Reference<_aws_cognito_user_pool__lambda_config[]> {
        return new Reference(`${this._name}.${this._id}.lambda_config`)
    }
    get ref_last_modified_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.last_modified_date`)
    }
    get ref_mfa_configuration(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.mfa_configuration`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_password_policy(): Reference<_aws_cognito_user_pool__password_policy[]> {
        return new Reference(`${this._name}.${this._id}.password_policy`)
    }
    get ref_schema(): Reference<_aws_cognito_user_pool__schema[]> {
        return new Reference(`${this._name}.${this._id}.schema`)
    }
    get ref_sms_authentication_message(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sms_authentication_message`)
    }
    get ref_sms_configuration(): Reference<_aws_cognito_user_pool__sms_configuration[]> {
        return new Reference(`${this._name}.${this._id}.sms_configuration`)
    }
    get ref_sms_verification_message(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.sms_verification_message`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_user_pool_add_ons(): Reference<_aws_cognito_user_pool__user_pool_add_ons[]> {
        return new Reference(`${this._name}.${this._id}.user_pool_add_ons`)
    }
    get ref_username_attributes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.username_attributes`)
    }
    get ref_verification_message_template(): Reference<_aws_cognito_user_pool__verification_message_template[]> {
        return new Reference(`${this._name}.${this._id}.verification_message_template`)
    }
}

