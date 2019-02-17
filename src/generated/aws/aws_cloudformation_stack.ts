import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloudformation_stack_config {
    capabilities?: rstring[]
    disable_rollback?: rboolean
    iam_role_arn?: rstring
    name: rstring
    notification_arns?: rstring[]
    on_failure?: rstring
    outputs?: {[propName: string]: rstring}
    parameters?: {[propName: string]: rstring}
    policy_body?: rstring
    policy_url?: rstring
    tags?: {[propName: string]: rstring}
    template_body?: rstring
    template_url?: rstring
    timeout_in_minutes?: rnumber
}

export class aws_cloudformation_stack implements Resource {
    config: aws_cloudformation_stack_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudformation_stack"
    private _id: string;
    constructor(id: string, config: aws_cloudformation_stack_config) {
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
    
    get ref_capabilities(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.capabilities`)
    }
    get ref_disable_rollback(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.disable_rollback`)
    }
    get ref_iam_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.iam_role_arn`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_notification_arns(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.notification_arns`)
    }
    get ref_on_failure(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.on_failure`)
    }
    get ref_outputs(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.outputs`)
    }
    get ref_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.parameters`)
    }
    get ref_policy_body(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy_body`)
    }
    get ref_policy_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy_url`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_template_body(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.template_body`)
    }
    get ref_template_url(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.template_url`)
    }
    get ref_timeout_in_minutes(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.timeout_in_minutes`)
    }
}

