import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_mq_configuration_config {
    arn?: rstring
    data: rstring
    description?: rstring
    engine_type: rstring
    engine_version: rstring
    latest_revision?: rnumber
    name: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_mq_configuration implements Resource {
    config: aws_mq_configuration_config
    private _is_data: boolean = false
    private _name: string = "aws_mq_configuration"
    private _id: string;
    constructor(id: string, config: aws_mq_configuration_config) {
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
    get ref_data(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.data`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_engine_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine_type`)
    }
    get ref_engine_version(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.engine_version`)
    }
    get ref_latest_revision(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.latest_revision`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

