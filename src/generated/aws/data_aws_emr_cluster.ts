import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_emr_cluster__bootstrap_action {
    args?: rstring[]
    name: rstring
    path: rstring
}

export interface _data_aws_emr_cluster__ec2_attributes {
    additional_master_security_groups?: rstring
    additional_slave_security_groups?: rstring
    emr_managed_master_security_group?: rstring
    emr_managed_slave_security_group?: rstring
    instance_profile: rstring
    key_name?: rstring
    service_access_security_group?: rstring
    subnet_id?: rstring
}

export interface __data_aws_emr_cluster__instance_group__ebs_config {
    iops?: rnumber
    size: rnumber
    type: rstring
    volumes_per_instance?: rnumber
}

export interface _data_aws_emr_cluster__instance_group {
    autoscaling_policy?: rstring
    bid_price?: rstring
    ebs_config?: __data_aws_emr_cluster__instance_group__ebs_config[]
    id?: rstring
    instance_count?: rnumber
    instance_role: rstring
    instance_type: rstring
    name?: rstring
}

export interface _data_aws_emr_cluster__kerberos_attributes {
    ad_domain_join_password?: rstring
    ad_domain_join_user?: rstring
    cross_realm_trust_principal_password?: rstring
    kdc_admin_password: rstring
    realm: rstring
}

export interface __data_aws_emr_cluster__step__hadoop_jar_step {
    args?: rstring[]
    jar: rstring
    main_class?: rstring
    properties?: {[propName: string]: rstring}
}

export interface _data_aws_emr_cluster__step {
    action_on_failure: rstring
    hadoop_jar_step: __data_aws_emr_cluster__step__hadoop_jar_step[]
    name: rstring
}

export interface data_aws_emr_cluster_config {
    additional_info?: rstring
    applications?: rstring[]
    autoscaling_role?: rstring
    bootstrap_action?: _data_aws_emr_cluster__bootstrap_action[]
    cluster_state?: rstring
    configurations?: rstring
    configurations_json?: rstring
    core_instance_count?: rnumber
    core_instance_type?: rstring
    custom_ami_id?: rstring
    ebs_root_volume_size?: rnumber
    ec2_attributes?: _data_aws_emr_cluster__ec2_attributes[]
    instance_group?: _data_aws_emr_cluster__instance_group[]
    keep_job_flow_alive_when_no_steps?: rboolean
    kerberos_attributes?: _data_aws_emr_cluster__kerberos_attributes[]
    log_uri?: rstring
    master_instance_type?: rstring
    master_public_dns?: rstring
    name: rstring
    release_label: rstring
    scale_down_behavior?: rstring
    security_configuration?: rstring
    service_role: rstring
    step?: _data_aws_emr_cluster__step[]
    tags?: {[propName: string]: rstring}
    termination_protection?: rboolean
    visible_to_all_users?: rboolean
}

export class data_aws_emr_cluster implements Data {
    config: data_aws_emr_cluster_config
    private _is_data: boolean = true
    private _name: string = "data_aws_emr_cluster"
    private _id: string;
    constructor(id: string, config: data_aws_emr_cluster_config) {
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
    
    get ref_additional_info(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.additional_info`)
  }
    get ref_applications(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.applications`)
  }
    get ref_autoscaling_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.autoscaling_role`)
  }
    get ref_bootstrap_action(): Reference<_data_aws_emr_cluster__bootstrap_action[]> {
        return new Reference(`data.${this._name}.${this._id}.bootstrap_action`)
  }
    get ref_cluster_state(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cluster_state`)
  }
    get ref_configurations(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.configurations`)
  }
    get ref_configurations_json(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.configurations_json`)
  }
    get ref_core_instance_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.core_instance_count`)
  }
    get ref_core_instance_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.core_instance_type`)
  }
    get ref_custom_ami_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.custom_ami_id`)
  }
    get ref_ebs_root_volume_size(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.ebs_root_volume_size`)
  }
    get ref_ec2_attributes(): Reference<_data_aws_emr_cluster__ec2_attributes[]> {
        return new Reference(`data.${this._name}.${this._id}.ec2_attributes`)
  }
    get ref_instance_group(): Reference<_data_aws_emr_cluster__instance_group[]> {
        return new Reference(`data.${this._name}.${this._id}.instance_group`)
  }
    get ref_keep_job_flow_alive_when_no_steps(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.keep_job_flow_alive_when_no_steps`)
  }
    get ref_kerberos_attributes(): Reference<_data_aws_emr_cluster__kerberos_attributes[]> {
        return new Reference(`data.${this._name}.${this._id}.kerberos_attributes`)
  }
    get ref_log_uri(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.log_uri`)
  }
    get ref_master_instance_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.master_instance_type`)
  }
    get ref_master_public_dns(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.master_public_dns`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_release_label(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.release_label`)
  }
    get ref_scale_down_behavior(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.scale_down_behavior`)
  }
    get ref_security_configuration(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.security_configuration`)
  }
    get ref_service_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.service_role`)
  }
    get ref_step(): Reference<_data_aws_emr_cluster__step[]> {
        return new Reference(`data.${this._name}.${this._id}.step`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_termination_protection(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.termination_protection`)
  }
    get ref_visible_to_all_users(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.visible_to_all_users`)
  }
}

