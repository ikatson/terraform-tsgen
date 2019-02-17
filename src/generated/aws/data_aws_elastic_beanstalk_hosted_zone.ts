import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_elastic_beanstalk_hosted_zone_config {
    region?: rstring
}

export class data_aws_elastic_beanstalk_hosted_zone implements Data {
    config: data_aws_elastic_beanstalk_hosted_zone_config
    private _is_data: boolean = true
    private _name: string = "aws_elastic_beanstalk_hosted_zone"
    private _id: string;
    constructor(id: string, config: data_aws_elastic_beanstalk_hosted_zone_config) {
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
    
    get ref_region(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.region`)
  }
}

