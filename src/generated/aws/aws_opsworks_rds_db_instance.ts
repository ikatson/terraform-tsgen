import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_opsworks_rds_db_instance_config {
    db_password: rstring
    db_user: rstring
    rds_db_instance_arn: rstring
    stack_id: rstring
}

export class aws_opsworks_rds_db_instance implements Resource {
    config: aws_opsworks_rds_db_instance_config
    private _is_data: boolean = false
    private _name: string = "aws_opsworks_rds_db_instance"
    private _id: string;
    constructor(id: string, config: aws_opsworks_rds_db_instance_config) {
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
    
    get ref_db_password(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.db_password`)
    }
    get ref_db_user(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.db_user`)
    }
    get ref_rds_db_instance_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rds_db_instance_arn`)
    }
    get ref_stack_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.stack_id`)
    }
}

