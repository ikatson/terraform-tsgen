import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_opsworks_stack__custom_cookbooks_source {
    password?: rstring
    revision?: rstring
    ssh_key?: rstring
    type: rstring
    url: rstring
    username?: rstring
}

export interface data_aws_opsworks_stack_config {
    agent_version?: rstring
    arn?: rstring
    berkshelf_version?: rstring
    color?: rstring
    configuration_manager_name?: rstring
    configuration_manager_version?: rstring
    custom_cookbooks_source?: _data_aws_opsworks_stack__custom_cookbooks_source[]
    custom_json?: rstring
    default_availability_zone?: rstring
    default_instance_profile_arn: rstring
    default_os?: rstring
    default_root_device_type?: rstring
    default_ssh_key_name?: rstring
    default_subnet_id?: rstring
    hostname_theme?: rstring
    manage_berkshelf?: rboolean
    name: rstring
    region: rstring
    service_role_arn: rstring
    stack_endpoint?: rstring
    tags?: {[propName: string]: rstring}
    use_custom_cookbooks?: rboolean
    use_opsworks_security_groups?: rboolean
    vpc_id?: rstring
}

export class data_aws_opsworks_stack implements Data {
    config: data_aws_opsworks_stack_config
    private _is_data: boolean = true
    private _name: string = "data_aws_opsworks_stack"
    private _id: string;
    constructor(id: string, config: data_aws_opsworks_stack_config) {
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
    
    get ref_agent_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.agent_version`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_berkshelf_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.berkshelf_version`)
  }
    get ref_color(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.color`)
  }
    get ref_configuration_manager_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.configuration_manager_name`)
  }
    get ref_configuration_manager_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.configuration_manager_version`)
  }
    get ref_custom_cookbooks_source(): Reference<_data_aws_opsworks_stack__custom_cookbooks_source[]> {
        return new Reference(`data.${this._name}.${this._id}.custom_cookbooks_source`)
  }
    get ref_custom_json(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.custom_json`)
  }
    get ref_default_availability_zone(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_availability_zone`)
  }
    get ref_default_instance_profile_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_instance_profile_arn`)
  }
    get ref_default_os(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_os`)
  }
    get ref_default_root_device_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_root_device_type`)
  }
    get ref_default_ssh_key_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_ssh_key_name`)
  }
    get ref_default_subnet_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.default_subnet_id`)
  }
    get ref_hostname_theme(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.hostname_theme`)
  }
    get ref_manage_berkshelf(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.manage_berkshelf`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_region(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.region`)
  }
    get ref_service_role_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_role_arn`)
  }
    get ref_stack_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.stack_endpoint`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_use_custom_cookbooks(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.use_custom_cookbooks`)
  }
    get ref_use_opsworks_security_groups(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.use_opsworks_security_groups`)
  }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.vpc_id`)
  }
}

