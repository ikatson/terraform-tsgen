import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_mq_broker__configuration {
    id?: rstring
    revision?: rnumber
}

export interface _data_aws_mq_broker__instances {
    console_url?: rstring
    endpoints?: rstring[]
    ip_address?: rstring
}

export interface _data_aws_mq_broker__logs {
    audit?: rboolean
    general?: rboolean
}

export interface _data_aws_mq_broker__maintenance_window_start_time {
    day_of_week?: rstring
    time_of_day?: rstring
    time_zone?: rstring
}

export interface _data_aws_mq_broker__user {
    console_access?: rboolean
    groups?: rstring[]
    username: rstring
}

export interface data_aws_mq_broker_config {
    arn?: rstring
    auto_minor_version_upgrade?: rboolean
    broker_id?: rstring
    broker_name?: rstring
    configuration?: _data_aws_mq_broker__configuration[]
    deployment_mode?: rstring
    engine_type?: rstring
    engine_version?: rstring
    host_instance_type?: rstring
    instances?: _data_aws_mq_broker__instances[]
    logs?: _data_aws_mq_broker__logs[]
    maintenance_window_start_time?: _data_aws_mq_broker__maintenance_window_start_time[]
    publicly_accessible?: rboolean
    security_groups?: rstring[]
    subnet_ids?: rstring[]
    tags?: {[propName: string]: rstring}
    user?: _data_aws_mq_broker__user[]
}

export class data_aws_mq_broker implements Data {
    config: data_aws_mq_broker_config
    private _is_data: boolean = true
    private _name: string = "aws_mq_broker"
    private _id: string;
    constructor(id: string, config: data_aws_mq_broker_config) {
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
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_auto_minor_version_upgrade(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.auto_minor_version_upgrade`)
  }
    get ref_broker_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.broker_id`)
  }
    get ref_broker_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.broker_name`)
  }
    get ref_configuration(): Reference<_data_aws_mq_broker__configuration[]> {
        return new Reference(`data.${this._name}.${this._id}.configuration`)
  }
    get ref_deployment_mode(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.deployment_mode`)
  }
    get ref_engine_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine_type`)
  }
    get ref_engine_version(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.engine_version`)
  }
    get ref_host_instance_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.host_instance_type`)
  }
    get ref_instances(): Reference<_data_aws_mq_broker__instances[]> {
        return new Reference(`data.${this._name}.${this._id}.instances`)
  }
    get ref_logs(): Reference<_data_aws_mq_broker__logs[]> {
        return new Reference(`data.${this._name}.${this._id}.logs`)
  }
    get ref_maintenance_window_start_time(): Reference<_data_aws_mq_broker__maintenance_window_start_time[]> {
        return new Reference(`data.${this._name}.${this._id}.maintenance_window_start_time`)
  }
    get ref_publicly_accessible(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.publicly_accessible`)
  }
    get ref_security_groups(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.security_groups`)
  }
    get ref_subnet_ids(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.subnet_ids`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_user(): Reference<_data_aws_mq_broker__user[]> {
        return new Reference(`data.${this._name}.${this._id}.user`)
  }
}

