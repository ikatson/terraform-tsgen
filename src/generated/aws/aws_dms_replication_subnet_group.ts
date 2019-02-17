import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_dms_replication_subnet_group_config {
    replication_subnet_group_arn?: rstring
    replication_subnet_group_description: rstring
    replication_subnet_group_id: rstring
    subnet_ids: rstring[]
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class aws_dms_replication_subnet_group implements Resource {
    config: aws_dms_replication_subnet_group_config
    private _is_data: boolean = false
    private _name: string = "aws_dms_replication_subnet_group"
    private _id: string;
    constructor(id: string, config: aws_dms_replication_subnet_group_config) {
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
    
    get ref_replication_subnet_group_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_subnet_group_arn`)
    }
    get ref_replication_subnet_group_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_subnet_group_description`)
    }
    get ref_replication_subnet_group_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.replication_subnet_group_id`)
    }
    get ref_subnet_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.subnet_ids`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

