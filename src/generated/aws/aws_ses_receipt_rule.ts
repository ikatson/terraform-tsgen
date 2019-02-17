import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ses_receipt_rule__add_header_action {
    header_name: rstring
    header_value: rstring
    position: rnumber
}

export interface _aws_ses_receipt_rule__bounce_action {
    message: rstring
    position: rnumber
    sender: rstring
    smtp_reply_code: rstring
    status_code?: rstring
    topic_arn?: rstring
}

export interface _aws_ses_receipt_rule__lambda_action {
    function_arn: rstring
    invocation_type?: rstring
    position: rnumber
    topic_arn?: rstring
}

export interface _aws_ses_receipt_rule__s3_action {
    bucket_name: rstring
    kms_key_arn?: rstring
    object_key_prefix?: rstring
    position: rnumber
    topic_arn?: rstring
}

export interface _aws_ses_receipt_rule__sns_action {
    position: rnumber
    topic_arn: rstring
}

export interface _aws_ses_receipt_rule__stop_action {
    position: rnumber
    scope: rstring
    topic_arn?: rstring
}

export interface _aws_ses_receipt_rule__workmail_action {
    organization_arn: rstring
    position: rnumber
    topic_arn?: rstring
}

export interface aws_ses_receipt_rule_config {
    add_header_action?: _aws_ses_receipt_rule__add_header_action[]
    after?: rstring
    bounce_action?: _aws_ses_receipt_rule__bounce_action[]
    enabled?: rboolean
    lambda_action?: _aws_ses_receipt_rule__lambda_action[]
    name: rstring
    recipients?: rstring[]
    rule_set_name: rstring
    s3_action?: _aws_ses_receipt_rule__s3_action[]
    scan_enabled?: rboolean
    sns_action?: _aws_ses_receipt_rule__sns_action[]
    stop_action?: _aws_ses_receipt_rule__stop_action[]
    tls_policy?: rstring
    workmail_action?: _aws_ses_receipt_rule__workmail_action[]
}

export class aws_ses_receipt_rule implements Resource {
    config: aws_ses_receipt_rule_config
    private _is_data: boolean = false
    private _name: string = "aws_ses_receipt_rule"
    private _id: string;
    constructor(id: string, config: aws_ses_receipt_rule_config) {
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
    
    get ref_add_header_action(): Reference<_aws_ses_receipt_rule__add_header_action[]> {
        return new Reference(`${this._name}.${this._id}.add_header_action`)
    }
    get ref_after(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.after`)
    }
    get ref_bounce_action(): Reference<_aws_ses_receipt_rule__bounce_action[]> {
        return new Reference(`${this._name}.${this._id}.bounce_action`)
    }
    get ref_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enabled`)
    }
    get ref_lambda_action(): Reference<_aws_ses_receipt_rule__lambda_action[]> {
        return new Reference(`${this._name}.${this._id}.lambda_action`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_recipients(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.recipients`)
    }
    get ref_rule_set_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rule_set_name`)
    }
    get ref_s3_action(): Reference<_aws_ses_receipt_rule__s3_action[]> {
        return new Reference(`${this._name}.${this._id}.s3_action`)
    }
    get ref_scan_enabled(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.scan_enabled`)
    }
    get ref_sns_action(): Reference<_aws_ses_receipt_rule__sns_action[]> {
        return new Reference(`${this._name}.${this._id}.sns_action`)
    }
    get ref_stop_action(): Reference<_aws_ses_receipt_rule__stop_action[]> {
        return new Reference(`${this._name}.${this._id}.stop_action`)
    }
    get ref_tls_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tls_policy`)
    }
    get ref_workmail_action(): Reference<_aws_ses_receipt_rule__workmail_action[]> {
        return new Reference(`${this._name}.${this._id}.workmail_action`)
    }
}

