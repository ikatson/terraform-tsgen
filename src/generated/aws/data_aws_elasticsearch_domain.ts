import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_elasticsearch_domain__cluster_config {
    dedicated_master_count?: rnumber
    dedicated_master_enabled?: rboolean
    dedicated_master_type?: rstring
    instance_count?: rnumber
    instance_type?: rstring
    zone_awareness_enabled?: rboolean
}

export interface _data_aws_elasticsearch_domain__cognito_options {
    enabled?: rboolean
    identity_pool_id: rstring
    role_arn: rstring
    user_pool_id: rstring
}

export interface _data_aws_elasticsearch_domain__ebs_options {
    ebs_enabled: rboolean
    iops?: rnumber
    volume_size?: rnumber
    volume_type?: rstring
}

export interface _data_aws_elasticsearch_domain__encrypt_at_rest {
    enabled: rboolean
    kms_key_id?: rstring
}

export interface _data_aws_elasticsearch_domain__log_publishing_options {
    cloudwatch_log_group_arn: rstring
    enabled?: rboolean
    log_type: rstring
}

export interface _data_aws_elasticsearch_domain__node_to_node_encryption {
    enabled: rboolean
}

export interface _data_aws_elasticsearch_domain__snapshot_options {
    automated_snapshot_start_hour: rnumber
}

export interface _data_aws_elasticsearch_domain__vpc_options {
    availability_zones?: rstring[]
    security_group_ids?: rstring[]
    subnet_ids?: rstring[]
    vpc_id?: rstring
}

export interface data_aws_elasticsearch_domain_config {
    access_policies?: rstring
    advanced_options?: {[propName: string]: rstring}
    arn?: rstring
    cluster_config?: _data_aws_elasticsearch_domain__cluster_config[]
    cognito_options?: _data_aws_elasticsearch_domain__cognito_options[]
    domain_id?: rstring
    domain_name: rstring
    ebs_options?: _data_aws_elasticsearch_domain__ebs_options[]
    elasticsearch_version?: rstring
    encrypt_at_rest?: _data_aws_elasticsearch_domain__encrypt_at_rest[]
    endpoint?: rstring
    kibana_endpoint?: rstring
    log_publishing_options?: _data_aws_elasticsearch_domain__log_publishing_options[]
    node_to_node_encryption?: _data_aws_elasticsearch_domain__node_to_node_encryption[]
    snapshot_options?: _data_aws_elasticsearch_domain__snapshot_options[]
    tags?: {[propName: string]: rstring}
    vpc_options?: _data_aws_elasticsearch_domain__vpc_options[]
}

export class data_aws_elasticsearch_domain implements Data {
    config: data_aws_elasticsearch_domain_config
    private _is_data: boolean = true
    private _name: string = "data_aws_elasticsearch_domain"
    private _id: string;
    constructor(id: string, config: data_aws_elasticsearch_domain_config) {
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
    
    get ref_access_policies(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.access_policies`)
  }
    get ref_advanced_options(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.advanced_options`)
  }
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_cluster_config(): Reference<_data_aws_elasticsearch_domain__cluster_config[]> {
        return new Reference(`data.${this._name}.${this._id}.cluster_config`)
  }
    get ref_cognito_options(): Reference<_data_aws_elasticsearch_domain__cognito_options[]> {
        return new Reference(`data.${this._name}.${this._id}.cognito_options`)
  }
    get ref_domain_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.domain_id`)
  }
    get ref_domain_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.domain_name`)
  }
    get ref_ebs_options(): Reference<_data_aws_elasticsearch_domain__ebs_options[]> {
        return new Reference(`data.${this._name}.${this._id}.ebs_options`)
  }
    get ref_elasticsearch_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.elasticsearch_version`)
  }
    get ref_encrypt_at_rest(): Reference<_data_aws_elasticsearch_domain__encrypt_at_rest[]> {
        return new Reference(`data.${this._name}.${this._id}.encrypt_at_rest`)
  }
    get ref_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint`)
  }
    get ref_kibana_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.kibana_endpoint`)
  }
    get ref_log_publishing_options(): Reference<_data_aws_elasticsearch_domain__log_publishing_options[]> {
        return new Reference(`data.${this._name}.${this._id}.log_publishing_options`)
  }
    get ref_node_to_node_encryption(): Reference<_data_aws_elasticsearch_domain__node_to_node_encryption[]> {
        return new Reference(`data.${this._name}.${this._id}.node_to_node_encryption`)
  }
    get ref_snapshot_options(): Reference<_data_aws_elasticsearch_domain__snapshot_options[]> {
        return new Reference(`data.${this._name}.${this._id}.snapshot_options`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_vpc_options(): Reference<_data_aws_elasticsearch_domain__vpc_options[]> {
        return new Reference(`data.${this._name}.${this._id}.vpc_options`)
  }
}

