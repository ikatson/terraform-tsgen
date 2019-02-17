import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_elastic_beanstalk_environment__all_settings {
    name: rstring
    namespace: rstring
    resource?: rstring
    value: rstring
}

export interface _aws_elastic_beanstalk_environment__setting {
    name: rstring
    namespace: rstring
    resource?: rstring
    value: rstring
}

export interface aws_elastic_beanstalk_environment_config {
    all_settings?: _aws_elastic_beanstalk_environment__all_settings[]
    application: rstring
    arn?: rstring
    autoscaling_groups?: rstring[]
    cname?: rstring
    cname_prefix?: rstring
    description?: rstring
    instances?: rstring[]
    launch_configurations?: rstring[]
    load_balancers?: rstring[]
    name: rstring
    platform_arn?: rstring
    poll_interval?: rstring
    queues?: rstring[]
    setting?: _aws_elastic_beanstalk_environment__setting[]
    solution_stack_name?: rstring
    tags?: {[propName: string]: rstring}
    template_name?: rstring
    tier?: rstring
    triggers?: rstring[]
    version_label?: rstring
    wait_for_ready_timeout?: rstring
}

export class aws_elastic_beanstalk_environment implements Resource {
    config: aws_elastic_beanstalk_environment_config
    private _is_data: boolean = false
    private _name: string = "aws_elastic_beanstalk_environment"
    private _id: string;
    constructor(id: string, config: aws_elastic_beanstalk_environment_config) {
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
    
    get ref_all_settings(): Reference<_aws_elastic_beanstalk_environment__all_settings[]> {
        return new Reference(`${this._name}.${this._id}.all_settings`)
    }
    get ref_application(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.application`)
    }
    get ref_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_autoscaling_groups(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.autoscaling_groups`)
    }
    get ref_cname(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cname`)
    }
    get ref_cname_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cname_prefix`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_instances(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.instances`)
    }
    get ref_launch_configurations(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.launch_configurations`)
    }
    get ref_load_balancers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.load_balancers`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_platform_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.platform_arn`)
    }
    get ref_poll_interval(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.poll_interval`)
    }
    get ref_queues(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.queues`)
    }
    get ref_setting(): Reference<_aws_elastic_beanstalk_environment__setting[]> {
        return new Reference(`${this._name}.${this._id}.setting`)
    }
    get ref_solution_stack_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.solution_stack_name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_template_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.template_name`)
    }
    get ref_tier(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tier`)
    }
    get ref_triggers(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.triggers`)
    }
    get ref_version_label(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.version_label`)
    }
    get ref_wait_for_ready_timeout(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.wait_for_ready_timeout`)
    }
}

