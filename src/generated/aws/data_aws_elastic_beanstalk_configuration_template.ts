import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_elastic_beanstalk_configuration_template__setting {
    name: rstring
    namespace: rstring
    resource?: rstring
    value: rstring
}

export interface data_aws_elastic_beanstalk_configuration_template_config {
    application: rstring
    description?: rstring
    environment_id?: rstring
    name: rstring
    setting?: _data_aws_elastic_beanstalk_configuration_template__setting[]
    solution_stack_name?: rstring
}

export class data_aws_elastic_beanstalk_configuration_template implements Data {
    config: data_aws_elastic_beanstalk_configuration_template_config
    private _is_data: boolean = true
    private _name: string = "data_aws_elastic_beanstalk_configuration_template"
    private _id: string;
    constructor(id: string, config: data_aws_elastic_beanstalk_configuration_template_config) {
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
    
    get ref_application(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.application`)
  }
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_environment_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.environment_id`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_setting(): Reference<_data_aws_elastic_beanstalk_configuration_template__setting[]> {
        return new Reference(`data.${this._name}.${this._id}.setting`)
  }
    get ref_solution_stack_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.solution_stack_name`)
  }
}

