import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_inspector_assessment_template_config {
    arn?: rstring
    duration: rnumber
    name: rstring
    rules_package_arns: rstring[]
    target_arn: rstring
}

export class aws_inspector_assessment_template implements Resource {
    config: aws_inspector_assessment_template_config
    private _is_data: boolean = false
    private _name: string = "aws_inspector_assessment_template"
    private _id: string;
    constructor(id: string, config: aws_inspector_assessment_template_config) {
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
    get ref_duration(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.duration`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_rules_package_arns(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.rules_package_arns`)
    }
    get ref_target_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.target_arn`)
    }
}

