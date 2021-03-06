import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_opsworks_memcached_layer__ebs_volume {
    iops?: rnumber
    mount_point: rstring
    number_of_disks: rnumber
    raid_level?: rstring
    size: rnumber
    type?: rstring
}

export interface aws_opsworks_memcached_layer_config {
    allocated_memory?: rnumber
    auto_assign_elastic_ips?: rboolean
    auto_assign_public_ips?: rboolean
    auto_healing?: rboolean
    custom_configure_recipes?: rstring[]
    custom_deploy_recipes?: rstring[]
    custom_instance_profile_arn?: rstring
    custom_json?: rstring
    custom_security_group_ids?: rstring[]
    custom_setup_recipes?: rstring[]
    custom_shutdown_recipes?: rstring[]
    custom_undeploy_recipes?: rstring[]
    drain_elb_on_shutdown?: rboolean
    ebs_volume?: _aws_opsworks_memcached_layer__ebs_volume[]
    elastic_load_balancer?: rstring
    install_updates_on_boot?: rboolean
    instance_shutdown_timeout?: rnumber
    name?: rstring
    stack_id: rstring
    system_packages?: rstring[]
    use_ebs_optimized_instances?: rboolean
}

export class aws_opsworks_memcached_layer implements Resource {
    config: aws_opsworks_memcached_layer_config
    private _is_data: boolean = false
    private _name: string = "aws_opsworks_memcached_layer"
    private _id: string;
    constructor(id: string, config: aws_opsworks_memcached_layer_config) {
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
    
    get ref_allocated_memory(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.allocated_memory`)
    }
    get ref_auto_assign_elastic_ips(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.auto_assign_elastic_ips`)
    }
    get ref_auto_assign_public_ips(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.auto_assign_public_ips`)
    }
    get ref_auto_healing(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.auto_healing`)
    }
    get ref_custom_configure_recipes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.custom_configure_recipes`)
    }
    get ref_custom_deploy_recipes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.custom_deploy_recipes`)
    }
    get ref_custom_instance_profile_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.custom_instance_profile_arn`)
    }
    get ref_custom_json(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.custom_json`)
    }
    get ref_custom_security_group_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.custom_security_group_ids`)
    }
    get ref_custom_setup_recipes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.custom_setup_recipes`)
    }
    get ref_custom_shutdown_recipes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.custom_shutdown_recipes`)
    }
    get ref_custom_undeploy_recipes(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.custom_undeploy_recipes`)
    }
    get ref_drain_elb_on_shutdown(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.drain_elb_on_shutdown`)
    }
    get ref_ebs_volume(): Reference<_aws_opsworks_memcached_layer__ebs_volume[]> {
        return new Reference(`${this._name}.${this._id}.ebs_volume`)
    }
    get ref_elastic_load_balancer(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.elastic_load_balancer`)
    }
    get ref_install_updates_on_boot(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.install_updates_on_boot`)
    }
    get ref_instance_shutdown_timeout(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.instance_shutdown_timeout`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_stack_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.stack_id`)
    }
    get ref_system_packages(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.system_packages`)
    }
    get ref_use_ebs_optimized_instances(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.use_ebs_optimized_instances`)
    }
}

