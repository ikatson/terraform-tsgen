import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_datasync_task__options {
    atime?: rstring
    bytes_per_second?: rnumber
    gid?: rstring
    mtime?: rstring
    posix_permissions?: rstring
    preserve_deleted_files?: rstring
    preserve_devices?: rstring
    uid?: rstring
    verify_mode?: rstring
}

export interface data_aws_datasync_task_config {
    arn?: rstring
    cloudwatch_log_group_arn?: rstring
    destination_location_arn: rstring
    name?: rstring
    options?: _data_aws_datasync_task__options[]
    source_location_arn: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_datasync_task implements Data {
    config: data_aws_datasync_task_config
    private _is_data: boolean = true
    private _name: string = "data_aws_datasync_task"
    private _id: string;
    constructor(id: string, config: data_aws_datasync_task_config) {
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
    get ref_cloudwatch_log_group_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.cloudwatch_log_group_arn`)
  }
    get ref_destination_location_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.destination_location_arn`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_options(): Reference<_data_aws_datasync_task__options[]> {
        return new Reference(`data.${this._name}.${this._id}.options`)
  }
    get ref_source_location_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.source_location_arn`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

