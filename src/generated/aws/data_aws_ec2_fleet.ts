import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface __data_aws_ec2_fleet__launch_template_config__launch_template_specification {
    launch_template_id?: rstring
    launch_template_name?: rstring
    version: rstring
}

export interface __data_aws_ec2_fleet__launch_template_config__override {
    availability_zone?: rstring
    instance_type?: rstring
    max_price?: rstring
    priority?: rnumber
    subnet_id?: rstring
    weighted_capacity?: rnumber
}

export interface _data_aws_ec2_fleet__launch_template_config {
    launch_template_specification: __data_aws_ec2_fleet__launch_template_config__launch_template_specification[]
    override?: __data_aws_ec2_fleet__launch_template_config__override[]
}

export interface _data_aws_ec2_fleet__on_demand_options {
    allocation_strategy?: rstring
}

export interface _data_aws_ec2_fleet__spot_options {
    allocation_strategy?: rstring
    instance_interruption_behavior?: rstring
    instance_pools_to_use_count?: rnumber
}

export interface _data_aws_ec2_fleet__target_capacity_specification {
    default_target_capacity_type: rstring
    on_demand_target_capacity?: rnumber
    spot_target_capacity?: rnumber
    total_target_capacity: rnumber
}

export interface data_aws_ec2_fleet_config {
    excess_capacity_termination_policy?: rstring
    launch_template_config: _data_aws_ec2_fleet__launch_template_config[]
    on_demand_options?: _data_aws_ec2_fleet__on_demand_options[]
    replace_unhealthy_instances?: rboolean
    spot_options?: _data_aws_ec2_fleet__spot_options[]
    tags?: {[propName: string]: rstring}
    target_capacity_specification: _data_aws_ec2_fleet__target_capacity_specification[]
    terminate_instances?: rboolean
    terminate_instances_with_expiration?: rboolean
    type?: rstring
}

export class data_aws_ec2_fleet implements Data {
    config: data_aws_ec2_fleet_config
    private _is_data: boolean = true
    private _name: string = "data_aws_ec2_fleet"
    private _id: string;
    constructor(id: string, config: data_aws_ec2_fleet_config) {
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
    
    get ref_excess_capacity_termination_policy(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.excess_capacity_termination_policy`)
  }
    get ref_launch_template_config(): Reference<_data_aws_ec2_fleet__launch_template_config[]> {
        return new Reference(`data.${this._name}.${this._id}.launch_template_config`)
  }
    get ref_on_demand_options(): Reference<_data_aws_ec2_fleet__on_demand_options[]> {
        return new Reference(`data.${this._name}.${this._id}.on_demand_options`)
  }
    get ref_replace_unhealthy_instances(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.replace_unhealthy_instances`)
  }
    get ref_spot_options(): Reference<_data_aws_ec2_fleet__spot_options[]> {
        return new Reference(`data.${this._name}.${this._id}.spot_options`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_target_capacity_specification(): Reference<_data_aws_ec2_fleet__target_capacity_specification[]> {
        return new Reference(`data.${this._name}.${this._id}.target_capacity_specification`)
  }
    get ref_terminate_instances(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.terminate_instances`)
  }
    get ref_terminate_instances_with_expiration(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.terminate_instances_with_expiration`)
  }
    get ref_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.type`)
  }
}

