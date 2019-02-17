import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloud9_environment_ec2_config {
    arn?: rstring
    automatic_stop_time_minutes?: rnumber
    description?: rstring
    instance_type: rstring
    name: rstring
    owner_arn?: rstring
    subnet_id?: rstring
    type?: rstring
}

export class aws_cloud9_environment_ec2 implements Resource {
    config: aws_cloud9_environment_ec2_config
    private _is_data: boolean = false
    private _name: string = "aws_cloud9_environment_ec2"
    private _id: string;
    constructor(id: string, config: aws_cloud9_environment_ec2_config) {
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
    get ref_automatic_stop_time_minutes(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.automatic_stop_time_minutes`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_instance_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.instance_type`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_owner_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner_arn`)
    }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subnet_id`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
}

