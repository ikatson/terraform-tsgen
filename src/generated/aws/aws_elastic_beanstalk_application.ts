import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_elastic_beanstalk_application__appversion_lifecycle {
    delete_source_from_s3?: rboolean
    max_age_in_days?: rnumber
    max_count?: rnumber
    service_role: rstring
}

export interface aws_elastic_beanstalk_application_config {
    appversion_lifecycle?: _aws_elastic_beanstalk_application__appversion_lifecycle[]
    description?: rstring
    name: rstring
}

export class aws_elastic_beanstalk_application implements Resource {
    config: aws_elastic_beanstalk_application_config
    private _is_data: boolean = false
    private _name: string = "aws_elastic_beanstalk_application"
    private _id: string;
    constructor(id: string, config: aws_elastic_beanstalk_application_config) {
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
    
    get ref_appversion_lifecycle(): Reference<_aws_elastic_beanstalk_application__appversion_lifecycle[]> {
        return new Reference(`${this._name}.${this._id}.appversion_lifecycle`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
}

