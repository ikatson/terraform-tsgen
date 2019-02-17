import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_datasync_location_efs__ec2_config {
    security_group_arns: rstring[]
    subnet_arn: rstring
}

export interface aws_datasync_location_efs_config {
    arn?: rstring
    ec2_config: _aws_datasync_location_efs__ec2_config[]
    efs_file_system_arn: rstring
    subdirectory?: rstring
    tags?: {[propName: string]: rstring}
    uri?: rstring
}

export class aws_datasync_location_efs implements Resource {
    config: aws_datasync_location_efs_config
    private _is_data: boolean = false
    private _name: string = "aws_datasync_location_efs"
    private _id: string;
    constructor(id: string, config: aws_datasync_location_efs_config) {
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
    get ref_ec2_config(): Reference<_aws_datasync_location_efs__ec2_config[]> {
        return new Reference(`${this._name}.${this._id}.ec2_config`)
    }
    get ref_efs_file_system_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.efs_file_system_arn`)
    }
    get ref_subdirectory(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subdirectory`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_uri(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.uri`)
    }
}

