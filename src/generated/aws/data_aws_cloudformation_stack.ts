import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_cloudformation_stack_config {
    capabilities?: rstring[]
    description?: rstring
    disable_rollback?: rboolean
    iam_role_arn?: rstring
    name: rstring
    notification_arns?: rstring[]
    outputs?: {[propName: string]: rstring}
    parameters?: {[propName: string]: rstring}
    tags?: {[propName: string]: rstring}
    template_body?: rstring
    timeout_in_minutes?: rnumber
}

export class data_aws_cloudformation_stack implements Data {
    config: data_aws_cloudformation_stack_config
    private _is_data: boolean = true
    private _name: string = "aws_cloudformation_stack"
    private _id: string;
    constructor(id: string, config: data_aws_cloudformation_stack_config) {
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
        return new Reference(`data.${this._name}.${this._id}.capabilities`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_disable_rollback(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.disable_rollback`)
  }
    get ref_iam_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.iam_role_arn`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_notification_arns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.notification_arns`)
  }
    get ref_outputs(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.outputs`)
  }
    get ref_parameters(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.parameters`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_template_body(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.template_body`)
  }
    get ref_timeout_in_minutes(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.timeout_in_minutes`)
  }
}

