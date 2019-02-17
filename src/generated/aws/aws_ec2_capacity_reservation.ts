import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_ec2_capacity_reservation_config {
    availability_zone: rstring
    ebs_optimized?: rboolean
    end_date?: rstring
    end_date_type?: rstring
    ephemeral_storage?: rboolean
    instance_count: rnumber
    instance_match_criteria?: rstring
    instance_platform: rstring
    instance_type: rstring
    tags?: {[propName: string]: rstring}
    tenancy?: rstring
}

export class aws_ec2_capacity_reservation implements Resource {
    config: aws_ec2_capacity_reservation_config
    private _is_data: boolean = false
    private _name: string = "aws_ec2_capacity_reservation"
    private _id: string;
    constructor(id: string, config: aws_ec2_capacity_reservation_config) {
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
    
    get ref_availability_zone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.availability_zone`)
    }
    get ref_ebs_optimized(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.ebs_optimized`)
    }
    get ref_end_date(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.end_date`)
    }
    get ref_end_date_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.end_date_type`)
    }
    get ref_ephemeral_storage(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.ephemeral_storage`)
    }
    get ref_instance_count(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.instance_count`)
    }
    get ref_instance_match_criteria(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_match_criteria`)
    }
    get ref_instance_platform(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_platform`)
    }
    get ref_instance_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_type`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_tenancy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.tenancy`)
    }
}

