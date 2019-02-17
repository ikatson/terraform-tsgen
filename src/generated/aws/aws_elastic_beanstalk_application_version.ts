import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_elastic_beanstalk_application_version_config {
    application: rstring
    bucket: rstring
    description?: rstring
    force_delete?: rboolean
    key: rstring
    name: rstring
}

export class aws_elastic_beanstalk_application_version implements Resource {
    config: aws_elastic_beanstalk_application_version_config
    private _is_data: boolean = false
    private _name: string = "aws_elastic_beanstalk_application_version"
    private _id: string;
    constructor(id: string, config: aws_elastic_beanstalk_application_version_config) {
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
    
    get ref_application(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.application`)
    }
    get ref_bucket(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.bucket`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_force_delete(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.force_delete`)
    }
    get ref_key(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.key`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

